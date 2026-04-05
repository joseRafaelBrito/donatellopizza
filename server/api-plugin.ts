import type { Plugin } from "vite";
import type { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const LEADS_FILE = path.resolve("data/leads.json");
const TO_EMAIL = "donatellodetroitpizza@outlook.com";

function saveEmail(email: string) {
  const dir = path.dirname(LEADS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  let leads: string[] = [];
  if (fs.existsSync(LEADS_FILE)) {
    try { leads = JSON.parse(fs.readFileSync(LEADS_FILE, "utf-8")); } catch {}
  }
  if (!leads.includes(email)) {
    leads.push(email);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  }
}

async function sendNotification(email: string) {
  const SMTP_USER = process.env.SMTP_USER || "";
  const SMTP_PASS = process.env.SMTP_PASS || "";
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn("[mailer] SMTP not configured — skipping email notification");
    return;
  }
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.default.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { ciphers: "SSLv3" },
  });
  await transporter.sendMail({
    from: `"Donatello Pizza" <${SMTP_USER}>`,
    to: TO_EMAIL,
    subject: "🍕 Nuevo suscriptor — Donatello Pizza",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:480px;padding:24px;background:#fff8f0;border-radius:12px;border:2px solid #e53e3e;">
        <h2 style="color:#e53e3e;margin:0 0 12px;">¡Nuevo suscriptor! 🍕</h2>
        <p>Alguien reclamó su <strong>10% de descuento</strong>.</p>
        <div style="background:#fff;border:1px solid #ddd;border-radius:8px;padding:16px;margin:16px 0;">
          <p style="margin:0;font-size:18px;"><strong>Email:</strong> ${email}</p>
        </div>
        <p style="color:#666;font-size:13px;">Generado automáticamente desde donatello.pizza</p>
      </div>`,
  });
}

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk: Buffer) => (data += chunk.toString()));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

export function apiPlugin(): Plugin {
  return {
    name: "donatello-api",
    configureServer(server) {
      server.middlewares.use(
        "/api/subscribe",
        async (req: IncomingMessage, res: ServerResponse) => {
          res.setHeader("Content-Type", "application/json");

          if (req.method !== "POST") {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: "Method not allowed" }));
            return;
          }

          try {
            const body = await readBody(req);
            const { email } = JSON.parse(body) as { email?: string };

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "Correo inválido." }));
              return;
            }

            saveEmail(email);
            console.log(`[subscribe] New lead saved: ${email}`);

            sendNotification(email).catch((err) =>
              console.error("[subscribe] Notification failed:", err)
            );

            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            console.error("[subscribe] Error:", err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Error interno del servidor." }));
          }
        }
      );
    },
  };
}
