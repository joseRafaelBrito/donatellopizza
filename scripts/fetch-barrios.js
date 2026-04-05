#!/usr/bin/env node
/**
 * fetch-barrios.js
 * Attempts to fetch official Santiago barrio boundaries from:
 *   1. Municipal WFS server (http://cartografia.ayuntamientosantiago.gob.do)
 *   2. OpenStreetMap Overpass API (fallback)
 *   3. Keeps existing static GeoJSON if both sources are unavailable.
 *
 * Usage: node scripts/fetch-barrios.js
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const OUTPUT_PATH = path.join(__dirname, "../public/barrios_santiago.geojson");

const WFS_URL =
  "http://cartografia.ayuntamientosantiago.gob.do/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=geonode:BARRIOS_2023&outputFormat=application/json";

const OVERPASS_URL = "https://overpass-api.de/api/interpreter";
const OVERPASS_QUERY = `
[out:json][timeout:30];
(
  relation["boundary"="administrative"]["admin_level"~"^(9|10)$"]
  (19.35,70.80,19.60,70.55);
);
out geom;
`;

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.request(url, { timeout: 20000, ...options }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location, options).then(resolve).catch(reject);
        } else {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Request timed out")); });
    req.end();
  });
}

function postUrl(url, body) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const postData = `data=${encodeURIComponent(body)}`;
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(postData),
      },
      timeout: 30000,
    };
    const req = lib.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve({ status: res.statusCode, body: data }));
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Request timed out")); });
    req.write(postData);
    req.end();
  });
}

function osmToGeoJSON(osmJson) {
  const features = [];
  for (const el of osmJson.elements || []) {
    if (el.type !== "relation" || !el.members) continue;
    const name = el.tags?.name || el.tags?.["name:es"] || `Barrio ${el.id}`;
    const slug = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

    const outerWays = el.members.filter((m) => m.type === "way" && m.role === "outer");
    if (!outerWays.length || !outerWays[0].geometry?.length) continue;

    const coords = outerWays[0].geometry.map((p) => [p.lon, p.lat]);
    if (coords[0].join() !== coords[coords.length - 1].join()) coords.push(coords[0]);

    const lats = coords.map((c) => c[1]);
    const lngs = coords.map((c) => c[0]);
    const lat = ((Math.min(...lats) + Math.max(...lats)) / 2).toFixed(6);
    const lng = ((Math.min(...lngs) + Math.max(...lngs)) / 2).toFixed(6);

    features.push({
      type: "Feature",
      id: `barrio_${slug}`,
      geometry: { type: "Polygon", coordinates: [coords] },
      properties: {
        nombre: name,
        slug,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        descripcion: `Barrio ${name} en Santiago de los Caballeros, República Dominicana.`,
      },
    });
  }
  return { type: "FeatureCollection", name: "Barrios Santiago de los Caballeros", features };
}

async function main() {
  console.log("🗺️  Attempting to fetch barrios from WFS server...");
  try {
    const res = await fetchUrl(WFS_URL);
    if (res.status === 200 && res.body.startsWith("{")) {
      const data = JSON.parse(res.body);
      if (data.features?.length > 0) {
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
        console.log(`✅ Saved ${data.features.length} features from WFS to ${OUTPUT_PATH}`);
        return;
      }
    }
    console.log("⚠️  WFS returned no usable features:", res.body.slice(0, 200));
  } catch (e) {
    console.log("⚠️  WFS fetch failed:", e.message);
  }

  console.log("🗺️  Attempting OSM Overpass API fallback...");
  try {
    const res = await postUrl(OVERPASS_URL, OVERPASS_QUERY);
    if (res.status === 200) {
      const osmJson = JSON.parse(res.body);
      const geojson = osmToGeoJSON(osmJson);
      if (geojson.features.length > 0) {
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(geojson, null, 2));
        console.log(`✅ Saved ${geojson.features.length} features from OSM to ${OUTPUT_PATH}`);
        return;
      }
    }
    console.log("⚠️  OSM returned no usable features.");
  } catch (e) {
    console.log("⚠️  OSM fetch failed:", e.message);
  }

  console.log("ℹ️  Both sources unavailable. Keeping existing static GeoJSON.");
  if (fs.existsSync(OUTPUT_PATH)) {
    const data = JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8"));
    console.log(`✅ Using static file with ${data.features?.length ?? 0} barrios.`);
  } else {
    console.error("❌ No fallback GeoJSON found. Please restore public/barrios_santiago.geojson.");
  }
}

main().catch(console.error);
