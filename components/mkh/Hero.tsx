'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BRAND } from '@/lib/constants';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row pt-14 lg:pt-16">
      {/* Text side */}
      <div className="flex-1 lg:w-[58%] flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-12 lg:py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="text-[10px] font-body font-medium tracking-[0.28em] uppercase text-dove mb-8">
            Operations. Strategy. AI.
          </p>

          <h1 className="font-display text-[2.83rem] sm:text-[3.58rem] lg:text-[4.33rem] xl:text-[4.33rem] font-normal text-ink leading-[1.08] mb-8">
            Scale your Brand<br />
            <strong className="font-extrabold not-italic">without the operational chaos</strong>
          </h1>

          <p className="font-body text-base lg:text-[17px] text-smoke leading-relaxed mb-6 font-light">
            Growing a consumer brand is exciting until inventory slips, margins shrink, launches
            stall, and spreadsheets become your operating system.
          </p>

          <p className="font-body text-base lg:text-[17px] text-smoke leading-relaxed mb-6 font-light">
            At <strong className="font-semibold text-ink">MKH COLLECTIVE</strong>, we partner
            with ambitious beauty, wellness, and consumer brands to build the operational
            foundation that enables sustainable growth. From procurement and supply chain
            strategy to AI-powered workflows and executive operations, we help founders scale
            with confidence.
          </p>

          <p className="font-body text-base lg:text-[17px] text-smoke leading-relaxed mb-10 font-light">
            Whether you&apos;re preparing for retail, managing rapid growth, or building the
            systems investors expect, we become an extension of your leadership team.
          </p>

          <p className="font-display text-xl lg:text-2xl text-ink mb-10">
            <strong className="font-extrabold not-italic">Built for founders.</strong> Designed
            for scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a
              href={BRAND.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-body font-medium tracking-[0.18em] uppercase text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors duration-200"
            >
              Book a Discovery Call →
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
        className="relative w-full lg:w-[42%]"
        style={{ aspectRatio: '4/5' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
      >
        <Image
          src="/images/hero-brand.jpg"
          alt="Flat lay of unlabeled beauty and wellness products — soap bars, salt scrub, dropper bottle, and eucalyptus"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 42vw, 100vw"
          priority
        />
      </motion.div>
    </section>
  );
}
