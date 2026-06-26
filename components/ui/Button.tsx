import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'ghost' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: 'bg-caramel text-cream hover:bg-espresso',
  ghost: 'text-espresso hover:text-caramel',
  outline: 'border border-caramel text-caramel hover:bg-caramel hover:text-cream',
  'outline-light': 'border border-cream/40 text-cream hover:bg-cream/10',
};

const sizes = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-sm px-8 py-4',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-semibold tracking-wide transition-all duration-200 cursor-pointer disabled:opacity-60';
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
