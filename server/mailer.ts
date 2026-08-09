import nodemailer from "nodemailer";

const SMTP_HOST = process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com";
const SMTP_PORT = Number(process.env.BREVO_SMTP_PORT) || 587;
const SMTP_LOGIN = process.env.BREVO_SMTP_LOGIN;
const SMTP_PASSWORD = process.env.BREVO_SMTP_PASSWORD;
const NOTIFY_EMAIL = process.env.CHURCH_NOTIFICATION_EMAIL || "rccgpreciousstoneparish@gmail.com";

const transporter =
  SMTP_LOGIN && SMTP_PASSWORD
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: { user: SMTP_LOGIN, pass: SMTP_PASSWORD },
      })
    : null;

export async function notifyChurch(subject: string, lines: Record<string, string>) {
  if (!transporter) {
    console.warn("Brevo SMTP not configured — skipping email notification.");
    return;
  }
  const html = `
    <h2>${subject}</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${Object.entries(lines)
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold;vertical-align:top">${label}</td><td>${value || "—"}</td></tr>`,
        )
        .join("")}
    </table>
  `;
  try {
    await transporter.sendMail({
      from: `"Precious Stone Parish Website" <${SMTP_LOGIN}>`,
      to: NOTIFY_EMAIL,
      subject,
      html,
    });
  } catch (err) {
    console.error("Failed to send notification email:", err);
  }
}
