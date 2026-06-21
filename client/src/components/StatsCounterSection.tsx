import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: 1,
    label: 'Years of Experience',
    value: 20,
    suffix: '+',
    description: 'Across industries and markets',
  },
  {
    id: 2,
    label: 'Projects Completed',
    value: 150,
    suffix: '+',
    description: 'Successfully delivered transformations',
  },
  {
    id: 3,
    label: 'Global Clients',
    value: 75,
    suffix: '+',
    description: 'From startups to Fortune 500',
  },
  {
    id: 4,
    label: 'Revenue Impact',
    value: 500,
    suffix: 'M+',
    description: 'Generated for client organizations',
  },
];

export default function StatsCounterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counters
            stats.forEach((stat) => {
              let current = 0;
              const increment = stat.value / 50; // 50 steps for smooth animation
              const interval = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(interval);
                }
                setCounters((prev) => ({
                  ...prev,
                  [stat.id]: Math.floor(current),
                }));
              }, 30);
            });

            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 border-t border-border bg-gradient-to-b from-background via-background to-background">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">11</p>
          <h2 className="text-cinematic mb-12">Impact by Numbers</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.1}>
              <div className="text-center group">
                {/* Counter */}
                <div className="mb-4 relative">
                  <div className="text-5xl md:text-6xl font-light text-accent group-hover:scale-110 transition-transform duration-300">
                    {counters[stat.id] || 0}
                    <span className="text-3xl">{stat.suffix}</span>
                  </div>
                  {/* Animated underline */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mt-4 w-0 group-hover:w-full transition-all duration-500 mx-auto" />
                </div>

                {/* Label */}
                <p className="label-uppercase text-xs text-muted-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-sm text-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
