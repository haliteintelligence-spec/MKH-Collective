'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="py-12 lg:py-16 bg-white border-t border-rule/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-5">
            Our Services
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-normal text-ink max-w-xl leading-[1.15]">
            <strong className="font-extrabold not-italic">What We Do</strong>
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
              </div>

              <div className="col-span-11 lg:col-span-7 lg:col-start-5">
                <p className="font-body text-ink leading-relaxed text-[15px] mb-2">
                  {service.headline}
                </p>
                <p className="font-body text-smoke leading-relaxed text-[15px] font-light mb-6">
                  {service.description}
                </p>
                <p className="text-[10px] font-body font-medium tracking-[0.16em] uppercase text-dove mb-3">
                  Services Include
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 font-body text-smoke text-[14px] font-light leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-clay mt-[7px] shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
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
