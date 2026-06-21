import { ArrowRight, Briefcase, FileText, Lightbulb, MapPin, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import CinematicButton from '@/components/CinematicButton';
import ScrollReveal from '@/components/ScrollReveal';
import GoldenDivider from '@/components/GoldenDivider';
import ParallaxSection from '@/components/ParallaxSection';
import PortfolioSection from '@/components/PortfolioSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TimelineSection from '@/components/TimelineSection';
import StatsCounterSection from '@/components/StatsCounterSection';
import CTASection from '@/components/CTASection';
import AdvancedScrollAnimations from '@/components/AdvancedScrollAnimations';

declare global {
  interface Window {
    gsap?: any;
  }
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load GSAP dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      gsapScript.onload = () => {
        if (window.gsap) {
          window.gsap.registerPlugin(window.gsap.ScrollTrigger);
          initializeAnimations();
        }
      };
      document.head.appendChild(gsapScript);
    };
    document.head.appendChild(script);
  }, []);

  const initializeAnimations = () => {
    if (!window.gsap) return;

    const gsap = window.gsap;

    // Hero fade-in animation
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll('.hero-element'), {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }

    // Stats counter animation
    if (statsRef.current) {
      gsap.from(statsRef.current.querySelectorAll('.stat-number'), {
        textContent: 0,
        duration: 2,
        ease: 'power1.inOut',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen pt-20 flex items-center overflow-hidden"
        data-parallax-depth="3"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663780550187/Y2Eb3Mz7xprd2LR2FtzMNh/hero-background-MbknMoJB5UmbwNMSpq377y.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
          }}
        />

        {/* Content */}
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="hero-element" data-hero-element>
              <p className="label-uppercase text-xs text-muted-foreground mb-4">
                Driving Strategy. Delivering Impact.
              </p>
            </div>

            <h1 className="hero-element text-cinematic" data-hero-element>
              Transforming Vision Into{' '}
              <span className="text-accent-gold">Value</span>
            </h1>

            <p className="hero-element text-foreground/80 max-w-md leading-relaxed" data-hero-element>
              I partner with organizations and leaders to solve complex challenges, design future-ready strategies, and deliver measurable results.
            </p>

            <div className="hero-element flex gap-4" data-hero-element>
              <CinematicButton variant="gold" className="text-sm flex items-center gap-2">
                DISCOVER MORE
                <ArrowRight className="w-4 h-4" />
              </CinematicButton>
            </div>
          </div>

          {/* Right Content - Professional Portrait */}
          <div className="hero-element relative hidden lg:block">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute inset-0 border border-accent/30 -m-4" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780550187/Y2Eb3Mz7xprd2LR2FtzMNh/professional-portrait-Tgx85Gie9352Q6fdHzwCQV.webp"
                alt="Mohammed Alavi"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hero-element">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</p>
            <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 border-y border-border"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div data-stat-number className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="stat-number text-4xl font-light text-accent">20</span>
                <span className="text-sm text-muted-foreground">+</span>
              </div>
              <p className="label-uppercase text-xs text-muted-foreground">
                Years of Experience
              </p>
              <p className="text-sm text-foreground/70">
                Across industries and global markets
              </p>
            </div>

            {/* Stat 2 */}
            <div data-stat-number className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="stat-number text-4xl font-light text-accent">100</span>
                <span className="text-sm text-muted-foreground">+</span>
              </div>
              <p className="label-uppercase text-xs text-muted-foreground">
                Strategic Initiatives
              </p>
              <p className="text-sm text-foreground/70">
                Led and delivered successfully
              </p>
            </div>

            {/* Stat 3 */}
            <div data-stat-number className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <span className="stat-number text-4xl font-light text-accent">50</span>
                <span className="text-sm text-muted-foreground">+</span>
              </div>
              <p className="label-uppercase text-xs text-muted-foreground">
                Executive Clients
              </p>
              <p className="text-sm text-foreground/70">
                From startups to Fortune 500 companies
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <p className="label-uppercase text-xs text-muted-foreground">
                Global Perspective
              </p>
              <p className="text-sm text-foreground/70">
                Working across Middle East, Europe, and North America
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-number mb-4">01</p>
              <h2 className="text-cinematic mb-6">About Me</h2>
              <p className="text-foreground/80 mb-4">
                With over two decades of experience in executive consulting, I've had the privilege of working with organizations across diverse industries and geographies. My approach combines strategic thinking with practical execution.
              </p>
              <p className="text-foreground/80">
                I believe that lasting value comes from understanding the unique context of each organization, challenging conventional thinking, and building sustainable solutions that drive real impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div data-service-card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Strategy</h3>
                <p className="text-sm text-foreground/70">Business transformation and growth strategies</p>
              </div>
              <div data-service-card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Leadership</h3>
                <p className="text-sm text-foreground/70">Executive coaching and organizational development</p>
              </div>
              <div data-service-card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-foreground/70">Digital transformation and market disruption</p>
              </div>
              <div data-service-card className="p-6 border border-border hover:border-accent transition-colors duration-300">
                <FileText className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold mb-2">Insights</h3>
                <p className="text-sm text-foreground/70">Research and thought leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 border-t border-border">
        <div className="container">
          <p className="section-number mb-4">02</p>
          <h2 className="text-cinematic mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Business Strategy & Planning',
              'Organizational Transformation',
              'Digital & Technology Strategy',
              'Market Entry & Expansion',
              'Executive Leadership Development',
              'Change Management',
              'Mergers & Acquisitions',
              'Innovation & Product Strategy',
              'Performance Optimization',
            ].map((expertise, index) => (
              <div
                key={index}
                className="p-6 border border-border hover:border-accent hover:bg-card transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-accent text-lg font-light">0{index + 1}</span>
                  <p className="font-semibold group-hover:text-accent transition-colors duration-300">
                    {expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container">
          <p className="section-number mb-4">03</p>
          <h2 className="text-cinematic mb-12">Recent Experience</h2>
          <div className="space-y-12">
            {[
              {
                title: 'Chief Strategy Officer',
                company: 'Global Technology Firm',
                period: '2020 - Present',
                description: 'Led digital transformation initiatives resulting in 40% revenue growth',
              },
              {
                title: 'Senior Management Consultant',
                company: 'International Consulting Group',
                period: '2015 - 2020',
                description: 'Advised Fortune 500 companies on market expansion and operational excellence',
              },
              {
                title: 'Strategy Director',
                company: 'Regional Investment Firm',
                period: '2010 - 2015',
                description: 'Developed and executed investment strategies across emerging markets',
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="pb-12 border-b border-border last:border-b-0 hover:opacity-80 transition-opacity duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-light text-accent">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-foreground/70 mb-3">{exp.company}</p>
                <p className="text-foreground/80">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 border-t border-border">
        <div className="container">
          <p className="section-number mb-4">04</p>
          <h2 className="text-cinematic mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'The Future of Executive Leadership',
                date: 'June 2024',
                category: 'Leadership',
              },
              {
                title: 'Digital Transformation: Beyond Technology',
                date: 'May 2024',
                category: 'Strategy',
              },
              {
                title: 'Building Resilient Organizations',
                date: 'April 2024',
                category: 'Organizational Development',
              },
            ].map((insight, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="p-6 border border-border hover:border-accent transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <p className="label-uppercase text-xs text-accent mb-3">
                      {insight.category}
                    </p>
                    <h3 className="text-lg font-light mb-4 group-hover:text-accent transition-colors duration-300">
                      {insight.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Stats Counter Section */}
      <StatsCounterSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* CTA Section */}
      <CTASection />

      {/* Advanced Scroll Animations */}
      <AdvancedScrollAnimations />

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container">
          <p className="section-number mb-4">05</p>
          <h2 className="text-cinematic mb-12">Let's Connect</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground/80 mb-8">
                I'm always interested in discussing new opportunities, sharing insights, or exploring how I can add value to your organization.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="label-uppercase text-xs text-muted-foreground mb-2">Email</p>
                  <a href="mailto:hello@mohammedalavi.com" className="text-accent hover:underline">
                    hello@mohammedalavi.com
                  </a>
                </div>
                <div>
                  <p className="label-uppercase text-xs text-muted-foreground mb-2">Phone</p>
                  <a href="tel:+1234567890" className="text-accent hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="label-uppercase text-xs text-muted-foreground mb-2">Location</p>
                  <p className="text-foreground">Dubai, UAE</p>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-card border border-border px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-card border border-border px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  className="w-full bg-card border border-border px-4 py-3 focus:border-accent focus:outline-none transition-colors duration-300 h-32 resize-none"
                  placeholder="Your message"
                />
              </div>
              <CinematicButton variant="gold" className="w-full text-sm">
                SEND MESSAGE
              </CinematicButton>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm text-muted-foreground">
              © 2024 Mohammed Alavi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                LinkedIn
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
