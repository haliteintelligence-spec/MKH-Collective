'use client';

import { motion } from 'framer-motion';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { BRAND } from '@/lib/constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row pt-14 lg:pt-16">
      {/* Text side */}
      <div className="flex-1 lg:w-[58%] flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-20 lg:py-0 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-8">
            CPG Consulting
          </p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-normal text-ink leading-[1.08] mb-8">
            Strategy That<br />
            <strong className="font-extrabold not-italic">Moves the Shelf.</strong>
          </h1>

          <p className="font-body text-base lg:text-[17px] text-smoke leading-relaxed max-w-md mb-12 font-light">
            MKH Collective partners with CPG brands at every stage of growth — bringing
            data-driven clarity to retail strategy, procurement, and operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href={BRAND.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-body font-medium tracking-[0.18em] uppercase text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors duration-200"
            >
              Book a Call →
            </a>
            <span className="hidden sm:block w-px h-4 bg-rule" />
            <a
              href="#services"
              className="text-[11px] font-body font-medium tracking-[0.18em] uppercase text-dove hover:text-ink transition-colors duration-200"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image side */}
      <motion.div
        className="w-full lg:w-[42%] min-h-[50vw] lg:min-h-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
      >
        <ImagePlaceholder className="w-full h-full min-h-[400px]" label="Brand Photography" />
      </motion.div>
    </section>
  );
}
