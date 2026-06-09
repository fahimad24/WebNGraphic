import nodemailer from "nodemailer";
import brevoTransport from "nodemailer-brevo-transport";

type EmailOptions = {
  subject: string;
  html: string;
};

export async function sendEmail({
  subject,
  html,
}: EmailOptions): Promise<void> {
  const transporter = nodemailer.createTransport(
    new brevoTransport({
      apiKey: process.env.BREVO_SMTP_KEY!,
    })
  );

  await transporter.sendMail({
    from: process.env.BREVO_EMAIL!,
    to: process.env.RECEIVER_EMAIL,
    subject,
    html,
  });
}
