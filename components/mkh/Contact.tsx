'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BRAND } from '@/lib/constants';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setFormState('success');
        setForm({ name: '', company: '', email: '', phone: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-rule/60 py-3 text-[15px] font-body font-light text-ink placeholder:text-dove/70 focus:outline-none focus:border-ink transition-colors duration-200';

  return (
    <section id="contact" className="bg-sand/30 border-t border-rule/40">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-5">
            Let&apos;s Talk
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-normal text-ink leading-[1.15] mb-6">
            Ready to <strong className="font-extrabold not-italic">Scale Smarter?</strong>
          </h2>
          <p className="font-body text-smoke leading-relaxed max-w-xl text-[15px] font-light">
            Whether you need executive operational leadership, stronger supply chain systems, or
            AI-enabled growth, we&apos;re ready to help. Let&apos;s build the operating
            foundation your next stage of growth deserves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Book a Call */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-6">
              Book a Call
            </p>
            <h3 className="font-display text-3xl font-normal text-ink mb-5">
              Schedule Time With Us
            </h3>
            <p className="font-body text-smoke leading-relaxed mb-10 max-w-sm text-[15px] font-light">
              Choose a time that works for you. We&apos;ll come prepared with questions and a clear
              agenda so the conversation starts with substance.
            </p>
            <a
              href={BRAND.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-body font-medium tracking-[0.18em] uppercase text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors duration-200 self-start"
            >
              Schedule Your Discovery Call →
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-6">
              Send a Message
            </p>
            <h3 className="font-display text-3xl font-normal text-ink mb-8">
              Get in Touch
            </h3>

            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 border-t border-rule/40"
                >
                  <p className="font-display text-2xl font-normal text-ink mb-2">Message received.</p>
                  <p className="font-body text-sm text-smoke font-light mb-5">
                    We&apos;ll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-[10px] font-body tracking-[0.16em] uppercase text-dove hover:text-ink transition-colors underline underline-offset-4"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-0"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input type="text" placeholder="Your name" value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required className={inputClass} />
                  <input type="text" placeholder="Brand / Company" value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    required className={inputClass} />
                  <input type="email" placeholder="Email address" value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required className={inputClass} />
                  <input type="tel" placeholder="Phone number (optional)" value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className={inputClass} />
                  <textarea placeholder="How can we help?" rows={4} value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required className={`${inputClass} resize-none mt-2`} />

                  {formState === 'error' && (
                    <p className="text-xs font-body text-red-600 mt-3 font-light">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <div className="mt-10">
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="text-[11px] font-body font-medium tracking-[0.18em] uppercase text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors duration-200 disabled:opacity-50"
                    >
                      {formState === 'loading' ? 'Sending…' : 'Send Message →'}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
