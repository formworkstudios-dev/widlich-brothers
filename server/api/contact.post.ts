import { setResponseStatus } from "h3";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  // Parse and validate body
  const body = await readBody<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }>(event);

  const errors: string[] = [];
  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || name.length < 2) errors.push("Please provide your name.");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email))
    errors.push("Please provide a valid email address.");
  if (!message || message.length < 10)
    errors.push("Please include a brief message (at least 10 characters).");

  if (errors.length) {
    setResponseStatus(event, 400);
    return { status: "validation_error", errors };
  }

  // Initialize email client via dynamic import
  if (!config.resendApiKey) {
    setResponseStatus(event, 500);
    return { status: "error", message: "Email service not configured." };
  }

  let ResendCtor: unknown;
  try {
    const mod = await import("resend");
    ResendCtor = (mod as Record<string, unknown>)?.Resend;
  } catch {
    setResponseStatus(event, 500);
    return {
      status: "error",
      message: "Email service dependency not installed.",
    };
  }

  interface ResendLike {
    emails: {
      send: (args: {
        from: string;
        to: string[];
        bcc?: string[];
        subject: string;
        html: string;
        text: string;
      }) => Promise<unknown>;
    };
  }

  const ResendClass = ResendCtor as new (apiKey?: string) => unknown;
  const resend = new ResendClass(config.resendApiKey as string) as ResendLike;

  // Compose email content (Weidlich Brothers Tree Care)
  const subject = `New Tree Care Inquiry from ${name}`;
  const html = `
    <h2>New Tree Care Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;
  const text = `New Tree Care Inquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`;

  try {
    const result = await resend.emails.send({
      from: "Weidlich Brothers Tree Care Website <no-reply@formworkstudios.xyz>", // updated display name
      to: ["hello@formworkstudios.com"], // keep addresses as-is
      bcc: ["mikesynan@gmail.com"],
      subject,
      html,
      text,
    });

    return { status: "sent", result };
  } catch (err: unknown) {
    setResponseStatus(event, 500);
    const message = err instanceof Error ? err.message : "Failed to send email";
    return { status: "error", message };
  }
});

// Simple HTML escape to avoid accidental HTML injection in email body
function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
