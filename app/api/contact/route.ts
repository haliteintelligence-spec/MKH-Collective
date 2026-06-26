import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/send-email';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!company || typeof company !== 'string' || company.trim().length === 0) {
      return NextResponse.json({ error: 'Company name is required' }, { status: 400 });
    }
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    await sendContactEmail({
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: typeof phone === 'string' ? phone.trim() : '',
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
