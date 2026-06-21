import { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Digital Transformation Initiative',
    category: 'Technology',
    description: 'Led comprehensive digital transformation for a Fortune 500 company',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    year: '2024',
  },
  {
    id: 2,
    title: 'Market Expansion Strategy',
    category: 'Strategy',
    description: 'Developed and executed successful market entry strategy in 3 new regions',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    year: '2023',
  },
  {
    id: 3,
    title: 'Organizational Restructuring',
    category: 'Leadership',
    description: 'Orchestrated organizational restructuring resulting in 35% efficiency gains',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    year: '2023',
  },
  {
    id: 4,
    title: 'Innovation Lab Launch',
    category: 'Innovation',
    description: 'Established innovation lab that generated 5 new revenue streams',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    year: '2022',
  },
  {
    id: 5,
    title: 'Executive Leadership Program',
    category: 'Development',
    description: 'Designed and delivered executive development program for 200+ leaders',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    year: '2022',
  },
  {
    id: 6,
    title: 'Strategic Partnership Program',
    category: 'Business',
    description: 'Facilitated strategic partnerships generating $50M in new revenue',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    year: '2021',
  },
];

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = container.querySelectorAll('[data-project-card]');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
    };

    const handleMouseLeave = () => {
      const cards = container.querySelectorAll('[data-project-card]');
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">07</p>
          <h2 className="text-cinematic mb-12">Featured Projects</h2>
        </ScrollReveal>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div
                data-project-card
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer h-80"
                style={{
                  transitionProperty: 'transform',
                  transitionDuration: '0.3s',
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    opacity: 0.3,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div>
                    <p className="label-uppercase text-xs text-accent mb-2">{project.category}</p>
                    <h3 className="text-xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                      <div className="w-8 h-8 border border-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
