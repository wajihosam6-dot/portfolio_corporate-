import { Zap, Target, TrendingUp, Users, Lightbulb, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies aligned with organizational goals',
    icon: <Target className="w-8 h-8" />,
    features: ['Market Analysis', 'Competitive Positioning', 'Roadmap Development'],
    color: 'from-blue-500/20 to-transparent',
  },
  {
    id: 2,
    title: 'Digital Transformation',
    description: 'Accelerate digital adoption and technology integration',
    icon: <Zap className="w-8 h-8" />,
    features: ['Technology Assessment', 'Change Management', 'Implementation Support'],
    color: 'from-purple-500/20 to-transparent',
  },
  {
    id: 3,
    title: 'Performance Optimization',
    description: 'Enhance operational efficiency and profitability',
    icon: <TrendingUp className="w-8 h-8" />,
    features: ['Process Improvement', 'Cost Reduction', 'KPI Optimization'],
    color: 'from-green-500/20 to-transparent',
  },
  {
    id: 4,
    title: 'Leadership Development',
    description: 'Build high-performing leadership teams',
    icon: <Users className="w-8 h-8" />,
    features: ['Executive Coaching', 'Team Building', 'Talent Development'],
    color: 'from-cyan-500/20 to-transparent',
  },
  {
    id: 5,
    title: 'Innovation Strategy',
    description: 'Foster innovation culture and new business models',
    icon: <Lightbulb className="w-8 h-8" />,
    features: ['Innovation Workshops', 'Product Development', 'Market Disruption'],
    color: 'from-yellow-500/20 to-transparent',
  },
  {
    id: 6,
    title: 'Risk Management',
    description: 'Identify and mitigate organizational risks',
    icon: <Shield className="w-8 h-8" />,
    features: ['Risk Assessment', 'Mitigation Planning', 'Compliance Support'],
    color: 'from-red-500/20 to-transparent',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 border-t border-border" data-parallax-depth="2">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">08</p>
          <h2 className="text-cinematic mb-12" data-hero-element>Services & Solutions</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <div
                data-service-card
                className="group relative p-6 border border-border hover:border-accent transition-all duration-500 overflow-hidden cursor-pointer h-full"
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Animated Border Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 border border-accent/30 rounded-sm" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon with animation */}
                  <div className="inline-block p-3 border border-border group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 text-accent group-hover:scale-110 transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-foreground/60">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
