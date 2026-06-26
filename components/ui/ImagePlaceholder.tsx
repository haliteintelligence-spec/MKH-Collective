import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

type Props = {
  className?: string;
  label?: string;
  style?: CSSProperties;
};

export default function ImagePlaceholder({ className, label = 'Photography', style }: Props) {
  return (
    <div className={cn('relative w-full bg-linen overflow-hidden', className)} style={style}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-px bg-rule mx-auto mb-3" />
          <p className="text-[9px] font-body tracking-[0.25em] uppercase text-dove">{label}</p>
          <div className="w-8 h-px bg-rule mx-auto mt-3" />
        </div>
      </div>
    </div>
  );
}
