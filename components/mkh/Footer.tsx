import Link from 'next/link';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-body text-[11px] font-medium tracking-[0.22em] uppercase text-white"
            >
              MKH Collective
            </Link>
            <p className="font-body text-sm text-white/35 mt-4 leading-relaxed max-w-xs font-light">
              {BRAND.tagline}
            </p>
          </div>

          <div>
            <p className="text-[9px] font-body font-medium tracking-[0.28em] uppercase text-white/30 mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[11px] font-body font-light tracking-[0.1em] uppercase text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] font-body font-medium tracking-[0.28em] uppercase text-white/30 mb-5">
              Technology
            </p>
            <a
              href={BRAND.haliteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-body font-light tracking-[0.1em] uppercase text-white/45 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
            >
              Halite Intelligence →
            </a>
            <p className="font-body text-[11px] text-white/20 mt-2 leading-relaxed font-light">
              Predictive consumer intelligence
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] font-body font-light text-white/20">
            © {year} MKH Collective. All rights reserved.
          </p>
          <a
            href={BRAND.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-body font-medium tracking-[0.14em] uppercase text-white/35 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/15"
          >
            Book a Call →
          </a>
        </div>
      </div>
    </footer>
  );
}
