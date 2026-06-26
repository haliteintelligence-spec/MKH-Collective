'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-white border-t border-rule/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-5">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-normal text-ink max-w-xl leading-[1.15]">
            Three Pillars.<br /><strong className="font-extrabold not-italic">One Integrated Practice.</strong>
          </h2>
        </motion.div>

        <div>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="group border-t border-rule/40 py-10 lg:py-12 grid grid-cols-12 gap-4 lg:gap-8 items-start"
            >
              <div className="col-span-1">
                <span className="text-[11px] font-body font-light text-dove tabular-nums">
                  0{i + 1}
                </span>
              </div>

              <div className="col-span-11 lg:col-span-3">
                <h3 className="font-display text-2xl lg:text-3xl font-normal text-ink group-hover:text-clay transition-colors duration-300">
                  {service.label}
                </h3>
                <p className="text-[10px] font-body font-medium tracking-[0.16em] uppercase text-dove mt-1">
                  {service.headline}
                </p>
              </div>

              <div className="col-span-11 lg:col-span-7 lg:col-start-5">
                <p className="font-body text-smoke leading-relaxed text-[15px] font-light">
                  {service.description}
                </p>
              </div>

              <div className="hidden lg:flex col-span-1 justify-end items-start pt-1">
                <span className="text-[13px] text-clay opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-rule/40" />
        </div>
      </div>
    </section>
  );
}
