'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FOUNDER } from '@/lib/constants';

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" className="bg-white border-t border-rule/40">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            className="order-2 lg:order-1 relative w-full"
            style={{ aspectRatio: '4/5', minHeight: '480px' }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/marie-ozenua-headshot.jpg"
              alt={FOUNDER.name}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col justify-center px-6 lg:px-16 xl:px-20 py-12 lg:py-16"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-6">
              Our Founder
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-normal text-ink leading-[1.15] mb-6">
              Built by<br /><strong className="font-extrabold not-italic">an Operator.</strong>
            </h2>

            <div className="space-y-5 mb-8">
              {FOUNDER.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body text-smoke leading-relaxed max-w-md text-[15px] font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t border-rule/40 pt-6">
              <p className="font-display text-xl text-ink">{FOUNDER.name}</p>
              <p className="text-[10px] font-body font-medium tracking-[0.16em] uppercase text-dove mt-1">
                Founder, MKH Collective
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
