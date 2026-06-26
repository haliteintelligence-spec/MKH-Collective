import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark';
};

export default function SectionLabel({ children, className, variant = 'default' }: Props) {
  return (
    <p
      className={cn(
        'text-xs font-semibold tracking-[0.18em] uppercase font-body',
        variant === 'dark' ? 'text-sand' : 'text-caramel',
        className,
      )}
    >
      {children}
    </p>
  );
}
