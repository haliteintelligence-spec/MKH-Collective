import { Resend } from 'resend';

type ContactEmailParams = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendContactEmail({ name, company, email, phone, message }: ContactEmailParams) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: 'MKH Collective <noreply@mkhcollective.com>',
    to: 'marie@mkhcollective.com',
    replyTo: email,
    subject: `New inquiry from ${name} — ${company}`,
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: 'DM Sans', sans-serif; max-width: 600px; color: #2C1A0E;">
        <h2 style="color: #5C3D1E; font-size: 22px; margin-bottom: 20px;">
          New Inquiry — MKH Collective
        </h2>
        <p style="margin: 4px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 4px 0;"><strong>Company:</strong> ${company}</p>
        <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #8B6240;">${email}</a></p>
        <p style="margin: 4px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr style="border: none; border-top: 1px solid #EDE5D4; margin: 24px 0;" />
        <p style="white-space: pre-wrap; line-height: 1.7; color: #5C3D1E;">${message}</p>
      </div>
    `,
  });
}
