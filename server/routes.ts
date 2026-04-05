import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { sendSubscriberNotification } from "./mailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LEADS_FILE = path.join(__dirname, "..", "data", "leads.json");

function saveLeadToFile(email: string) {
  try {
    const dir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let leads: string[] = [];
    if (fs.existsSync(LEADS_FILE)) {
      leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8"));
    }
    if (!leads.includes(email)) {
      leads.push(email);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    }
  } catch (err) {
    console.error("[leads] Error saving lead:", err);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from attached_assets folder
  app.use("/attached_assets", (req, res, next) => {
    const filePath = path.join(
      __dirname,
      "..",
      "public",
      "attached_assets",
      req.path
    );
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(`Error al servir el archivo ${filePath}:`, err);
        res.status(404).send("Archivo no encontrado");
      }
    });
  });

  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    const { email } = req.body as { email?: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Correo inválido." });
    }

    // Always save to file first
    saveLeadToFile(email);
    console.log(`[subscribe] New lead captured: ${email}`);

    // Send notification email (non-blocking)
    try {
      await sendSubscriberNotification(email);
      console.log(`[subscribe] Notification sent for: ${email}`);
    } catch (err) {
      console.error(`[subscribe] Email notification failed:`, err);
    }

    return res.json({ ok: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
