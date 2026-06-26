'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_LINKS, BRAND } from '@/lib/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-rule/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14 lg:h-16">
        <Link
          href="/"
          className="font-body text-[11px] font-medium tracking-[0.22em] uppercase text-ink"
        >
          MKH Collective
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-body font-medium tracking-[0.14em] uppercase text-dove hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BRAND.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-body font-medium tracking-[0.14em] uppercase text-ink underline underline-offset-4 decoration-rule hover:decoration-ink transition-colors duration-200 flex items-center gap-1.5"
          >
            Book a Call →
          </a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-1 text-ink"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-transform origin-center duration-200 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-transform origin-center duration-200 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-rule/50 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-body font-medium tracking-[0.14em] uppercase text-dove hover:text-ink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BRAND.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-body font-medium tracking-[0.14em] uppercase text-ink underline underline-offset-4"
          >
            Book a Call →
          </a>
        </div>
      )}
    </header>
  );
}
