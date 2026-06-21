import { ReactNode, useRef, useEffect } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundOpacity?: number;
  className?: string;
}

export default function ParallaxSection({
  children,
  backgroundImage,
  backgroundOpacity = 0.3,
  className = '',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundImage || !sectionRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementOffset = sectionRef.current.offsetTop;
      const distance = scrolled - elementOffset;
      const yPos = distance * 0.5; // Parallax speed

      const bgElement = sectionRef.current.querySelector('[data-parallax-bg]') as HTMLElement;
      if (bgElement) {
        bgElement.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [backgroundImage]);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Background */}
      {backgroundImage && (
        <div
          data-parallax-bg
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: backgroundOpacity,
            willChange: 'transform',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
