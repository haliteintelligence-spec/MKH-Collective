'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PAIN_POINTS } from '@/lib/constants';

export default function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-12 lg:py-16 bg-linen border-t border-rule/40">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.p
          className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sound Familiar?
        </motion.p>

        <motion.h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink font-normal leading-[1.15] text-center mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Brand Has<br /><strong className="font-extrabold not-italic">Outgrown Guesswork.</strong>
        </motion.h2>

        <motion.p
          className="font-body text-smoke leading-relaxed text-center mb-12 font-light"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          If any of these sound familiar, you&apos;re in the right place:
        </motion.p>

        <div className="space-y-0 mb-12">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="border-t border-rule/40 py-4 flex items-start gap-4"
            >
              <span className="w-1 h-1 rounded-full bg-clay mt-[9px] shrink-0" />
              <p className="font-body text-smoke leading-relaxed text-[15px] font-light">
                {point}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-rule/40" />
        </div>

        <motion.p
          className="font-display text-2xl sm:text-3xl text-ink font-normal text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <strong className="font-extrabold not-italic">Growth shouldn&apos;t create chaos.</strong>
        </motion.p>
      </div>
    </section>
  );
}
