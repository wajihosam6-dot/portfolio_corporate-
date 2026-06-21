import { ReactNode, useRef, useEffect } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate initial transform based on direction
            let initialTransform = '';
            switch (direction) {
              case 'up':
                initialTransform = 'translateY(40px)';
                break;
              case 'down':
                initialTransform = 'translateY(-40px)';
                break;
              case 'left':
                initialTransform = 'translateX(-40px)';
                break;
              case 'right':
                initialTransform = 'translateX(40px)';
                break;
            }

            // Apply animation
            element.style.opacity = '0';
            element.style.transform = initialTransform;
            element.style.transition = `all ${duration}s cubic-bezier(0.23, 1, 0.32, 1) ${delay}s`;

            // Trigger animation
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0)';
            }, 10);

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, direction, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
