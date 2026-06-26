'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { APPROACH_POINTS } from '@/lib/constants';

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="approach" className="bg-white border-t border-rule/40">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <ImagePlaceholder
              className="w-full"
              label="Editorial Photography"
              style={{ aspectRatio: '4/5', minHeight: '480px' }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-center px-6 lg:px-16 xl:px-20 py-20 lg:py-28"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-6">
              Our Approach
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-normal text-ink leading-[1.15] mb-6">
              Data Is the<br /><strong className="font-extrabold not-italic">Competitive Edge.</strong>
            </h2>
            <p className="font-body text-smoke leading-relaxed mb-10 max-w-md text-[15px] font-light">
              Every CPG brand has ambition. Few have the analytical infrastructure to act on it.
              We build the models, synthesize the signals, and translate insights into decisions
              that compound over time.
            </p>

            <div className="space-y-0">
              {APPROACH_POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="border-t border-rule/40 py-5"
                >
                  <h4 className="font-body text-[11px] font-medium tracking-[0.16em] uppercase text-ink mb-2">
                    {point.title}
                  </h4>
                  <p className="font-body text-sm text-smoke leading-relaxed font-light">
                    {point.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
