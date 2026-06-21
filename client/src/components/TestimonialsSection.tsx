import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'Tech Innovations Inc',
    content: 'Mohammed\'s strategic guidance transformed our organization. His insights and execution capabilities are unparalleled. The results exceeded our expectations by 40%.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'COO',
    company: 'Global Solutions Ltd',
    content: 'Working with Mohammed on our digital transformation was a game-changer. Results exceeded expectations by 40%. His approach is methodical and results-driven.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Williams',
    title: 'Managing Director',
    company: 'Strategic Partners Group',
    content: 'Exceptional consultant who combines deep industry knowledge with practical implementation expertise. Highly recommended for any transformation initiative.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Martinez',
    title: 'President',
    company: 'Enterprise Solutions Corp',
    content: 'Mohammed\'s leadership development program elevated our management team significantly. The impact on our organizational culture has been remarkable.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 border-t border-border" data-parallax-depth="1">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">09</p>
          <h2 className="text-cinematic mb-12" data-hero-element>Client Testimonials</h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div
            data-testimonial-card
            className="relative p-8 md:p-12 border border-border bg-gradient-to-br from-accent/5 to-transparent backdrop-blur-sm min-h-80 flex flex-col justify-between overflow-hidden group"
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated border */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 border border-accent/30" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl font-light text-foreground mb-8 leading-relaxed group-hover:text-accent/90 transition-colors duration-300">
                "{currentTestimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-accent">{currentTestimonial.title}</p>
                <p className="text-xs text-muted-foreground">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-700" />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="group/btn p-2 border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-accent'
                      : 'w-2 h-2 bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="group/btn p-2 border border-border hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent/5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
