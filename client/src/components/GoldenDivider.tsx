import { useRef, useEffect } from 'react';

interface GoldenDividerProps {
  className?: string;
  animated?: boolean;
}

export default function GoldenDivider({ className = '', animated = true }: GoldenDividerProps) {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !dividerRef.current) return;

    const divider = dividerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation
            divider.style.opacity = '0';
            divider.style.transform = 'scaleX(0)';
            divider.style.transformOrigin = 'left center';
            divider.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';

            setTimeout(() => {
              divider.style.opacity = '1';
              divider.style.transform = 'scaleX(1)';
            }, 10);

            observer.unobserve(divider);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(divider);

    return () => {
      observer.disconnect();
    };
  }, [animated]);

  return (
    <div
      ref={dividerRef}
      className={`h-px bg-gradient-to-r from-transparent via-accent to-transparent ${className}`}
      style={{ opacity: animated ? 0 : 1 }}
    />
  );
}
