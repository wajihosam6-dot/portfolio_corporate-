import { ReactNode, useRef, useEffect } from 'react';

interface CinematicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'gold' | 'outline';
  className?: string;
  disabled?: boolean;
}

export default function CinematicButton({
  children,
  onClick,
  variant = 'gold',
  className = '',
  disabled = false,
}: CinematicButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      if (disabled) return;
      button.style.transform = 'scale(1.05)';
      button.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.3)';
    };

    const handleMouseLeave = () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
    };

    const handleMouseDown = () => {
      if (disabled) return;
      button.style.transform = 'scale(0.98)';
    };

    const handleMouseUp = () => {
      if (disabled) return;
      button.style.transform = 'scale(1.05)';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousedown', handleMouseDown);
    button.addEventListener('mouseup', handleMouseUp);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousedown', handleMouseDown);
      button.removeEventListener('mouseup', handleMouseUp);
    };
  }, [disabled]);

  const baseClasses = 'px-6 py-3 transition-all duration-300 ease-out font-semibold tracking-widest uppercase text-sm';
  const variantClasses = variant === 'gold'
    ? 'border border-accent text-accent hover:bg-accent hover:text-background'
    : 'border border-foreground/30 text-foreground hover:border-accent hover:text-accent';

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
