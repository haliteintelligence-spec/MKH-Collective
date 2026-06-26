'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BRAND, HALITE_CAPABILITIES } from '@/lib/constants';

export default function HaliteTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="technology" className="bg-night">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-gold/60 mb-6">
            Powered by Technology
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-normal text-white leading-[1.1]">
              Introducing<br />
              <strong className="font-extrabold not-italic text-gold">Halite.</strong>
            </h2>
            <p className="font-body text-white/45 leading-relaxed max-w-md lg:text-[17px] font-light">
              Know your customer. Keep them longer. Halite is the only platform built for
              predictive CPG intelligence — turning consumer interactions into retention,
              personalization, and growth.
            </p>
          </div>
        </motion.div>

        <div>
          {HALITE_CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group border-t border-white/10 py-8 grid grid-cols-12 gap-6 items-start"
            >
              <div className="col-span-1">
                <span className="text-[11px] font-body font-light text-gold/35 tabular-nums">0{i + 1}</span>
              </div>
              <div className="col-span-11 lg:col-span-4">
                <h4 className="font-body text-[11px] font-medium tracking-[0.16em] uppercase text-gold group-hover:text-white transition-colors duration-300">
                  {cap.label}
                </h4>
              </div>
              <div className="col-span-11 lg:col-span-6 lg:col-start-6">
                <p className="font-body text-sm text-white/35 leading-relaxed font-light">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14"
        >
          <a
            href={BRAND.haliteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-body font-medium tracking-[0.18em] uppercase text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors duration-200"
          >
            Explore Halite →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
