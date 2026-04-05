import nodemailer from "nodemailer";

const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const TO_EMAIL = "donatellodetroitpizza@outlook.com";

export async function sendSubscriberNotification(subscriberEmail: string): Promise<void> {
  if (!SMTP_USER || !SMTP_PASS) {
    console.warn("[mailer] SMTP_USER / SMTP_PASS not configured — skipping email notification");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { ciphers: "SSLv3" },
  });

  await transporter.sendMail({
    from: `"Donatello Pizza" <${SMTP_USER}>`,
    to: TO_EMAIL,
    subject: "🍕 Nuevo suscriptor en el banner de Donatello Pizza",
    html: `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;padding:24px;background:#fff8f0;border-radius:12px;border:2px solid #e53e3e;">
        <h2 style="color:#e53e3e;margin:0 0 12px;">¡Nuevo suscriptor! 🍕</h2>
        <p style="color:#333;font-size:16px;">Alguien reclamó su <strong>10% de descuento</strong> en Donatello Pizza.</p>
        <div style="background:#fff;border:1px solid #ddd;border-radius:8px;padding:16px;margin:16px 0;">
          <p style="margin:0;font-size:18px;color:#2d3748;"><strong>Email:</strong> ${subscriberEmail}</p>
        </div>
        <p style="color:#666;font-size:13px;">Este aviso fue generado automáticamente desde donatello.pizza</p>
      </div>
    `,
  });
}
