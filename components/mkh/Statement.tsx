'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 lg:py-28 bg-linen border-t border-rule/40">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Philosophy
        </motion.p>

        <motion.p
          className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-ink font-normal leading-[1.4]"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The best consumer brands are built at the intersection of{' '}
          <strong className="font-extrabold not-italic">data intelligence</strong> and human instinct. We exist to help CPG
          brands find — and keep — that edge.
        </motion.p>
      </div>
    </section>
  );
}
