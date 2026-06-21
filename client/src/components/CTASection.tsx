import { ArrowRight, Mail, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CinematicButton from './CinematicButton';

export default function CTASection() {
  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">12</p>
        </ScrollReveal>

        {/* Main CTA */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-cinematic mb-6">Ready to Transform Your Organization?</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how strategic consulting can drive measurable results for your organization. I'm here to help you navigate complex challenges and unlock new opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CinematicButton variant="gold" className="flex items-center justify-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </CinematicButton>
              <CinematicButton variant="outline" className="flex items-center justify-center gap-2">
                Download Portfolio
                <ArrowRight className="w-4 h-4" />
              </CinematicButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <ScrollReveal delay={0.4}>
            <div className="p-6 border border-border hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 border border-accent flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="label-uppercase text-xs text-muted-foreground">Email</p>
                  <a href="mailto:hello@mohammedalavi.com" className="text-accent hover:underline">
                    hello@mohammedalavi.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="p-6 border border-border hover:border-accent transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 border border-accent flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="label-uppercase text-xs text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="text-accent hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-16" />

        {/* Secondary CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4">Connect on Social Media</h3>
            <p className="text-foreground/70 mb-6">
              Follow for insights on strategy, leadership, and business transformation
            </p>
            <div className="flex gap-4 justify-center">
              {['LinkedIn', 'Twitter', 'Medium'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-6 py-2 border border-border hover:border-accent hover:text-accent transition-all duration-300 text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
