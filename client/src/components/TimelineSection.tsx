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
    <section className="py-20 border-t border-border">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">10</p>
          <h2 className="text-cinematic mb-12">Career Timeline</h2>
        </ScrollReveal>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

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
                    <div className={`p-6 border border-border hover:border-accent transition-all duration-300 ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <p className="label-uppercase text-xs text-accent mb-2">{event.year}</p>
                      <h3 className="text-xl font-light mb-2 hover:text-accent transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-3">{event.description}</p>
                      <p className="text-xs text-muted-foreground italic">{event.milestone}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="flex justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background mt-6" />
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
      `}</style>
    </section>
  );
}
