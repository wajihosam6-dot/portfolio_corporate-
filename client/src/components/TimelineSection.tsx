import { useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  milestone: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2004',
    title: 'Career Foundation',
    description: 'Started consulting career with leading management firm',
    milestone: 'First consulting engagement',
  },
  {
    id: 2,
    year: '2008',
    title: 'Senior Consultant',
    description: 'Promoted to senior consultant, leading major transformation projects',
    milestone: 'Led $100M+ transformation',
  },
  {
    id: 3,
    year: '2012',
    title: 'Partner Level',
    description: 'Became partner, expanded practice across Middle East and Europe',
    milestone: 'Established regional practice',
  },
  {
    id: 4,
    year: '2016',
    title: 'Executive Role',
    description: 'Transitioned to executive advisory, serving Fortune 500 companies',
    milestone: 'Advised 50+ Fortune 500 companies',
  },
  {
    id: 5,
    year: '2020',
    title: 'Chief Strategy Officer',
    description: 'Appointed CSO at global technology firm, driving digital transformation',
    milestone: 'Led digital transformation',
  },
  {
    id: 6,
    year: '2024',
    title: 'Independent Advisor',
    description: 'Established independent advisory practice focusing on strategic consulting',
    milestone: 'Serving global clients',
  },
];

export default function TimelineSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = timeline.querySelectorAll('[data-timeline-item]');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 150);
            });
            observer.unobserve(timeline);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(timeline);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 border-t border-border" data-parallax-depth="1">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">10</p>
          <h2 className="text-cinematic mb-12" data-hero-element>Career Timeline</h2>
        </ScrollReveal>

        <div ref={timelineRef} data-timeline-container className="relative">
          {/* Animated Timeline Line */}
          <div
            data-timeline-line
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent"
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                data-timeline-item
                className="opacity-0 translate-y-8 transition-all duration-500"
              >
                <div className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div
                      className={`group p-6 border border-border hover:border-accent transition-all duration-300 hover:bg-accent/5 cursor-pointer ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      {/* Year */}
                      <p className="label-uppercase text-xs text-accent mb-2 group-hover:text-accent transition-colors duration-300">
                        {event.year}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-light mb-2 group-hover:text-accent transition-colors duration-300">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground/70 mb-3 group-hover:text-foreground/80 transition-colors duration-300">
                        {event.description}
                      </p>

                      {/* Milestone */}
                      <p className="text-xs text-muted-foreground italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {event.milestone}
                      </p>

                      {/* Animated bottom border */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  {/* Center Dot with animation */}
                  <div className="flex justify-center">
                    <div className="relative w-4 h-4 mt-6">
                      {/* Outer glow */}
                      <div className="absolute inset-0 bg-accent rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Inner dot */}
                      <div className="absolute inset-1 bg-accent rounded-full border-4 border-background" />
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        [data-timeline-item].animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        [data-timeline-item]:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
}
