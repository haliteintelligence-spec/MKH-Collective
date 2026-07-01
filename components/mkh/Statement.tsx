'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { EXPERIENCE_AREAS } from '@/lib/constants';

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-12 lg:py-16 bg-linen border-t border-rule/40">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why MKH Collective?
        </motion.p>

        <motion.p
          className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-ink font-normal leading-[1.4]"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Most consultants give advice.{' '}
          <strong className="font-extrabold not-italic">We build operating systems.</strong>
        </motion.p>

        <motion.p
          className="font-body text-smoke leading-relaxed mt-8 max-w-2xl mx-auto text-[15px] font-light"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our approach combines strategy with execution, helping founders solve immediate
          operational challenges while creating infrastructure that supports long-term growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-14"
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-6">
            Our Experience Spans
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3">
            {EXPERIENCE_AREAS.map((area, i) => (
              <span key={area} className="flex items-center gap-3">
                <span className="text-[13px] font-body font-light text-ink">{area}</span>
                {i < EXPERIENCE_AREAS.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-rule" />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
