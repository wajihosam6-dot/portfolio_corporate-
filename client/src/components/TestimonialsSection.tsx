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
    content: 'Mohammed\'s strategic guidance transformed our organization. His insights and execution capabilities are unparalleled.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'COO',
    company: 'Global Solutions Ltd',
    content: 'Working with Mohammed on our digital transformation was a game-changer. Results exceeded expectations by 40%.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Williams',
    title: 'Managing Director',
    company: 'Strategic Partners Group',
    content: 'Exceptional consultant who combines deep industry knowledge with practical implementation expertise.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Martinez',
    title: 'President',
    company: 'Enterprise Solutions Corp',
    content: 'Mohammed\'s leadership development program elevated our management team significantly.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 border-t border-border">
      <div className="container">
        <ScrollReveal>
          <p className="section-number mb-4">09</p>
          <h2 className="text-cinematic mb-12">Client Testimonials</h2>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="p-8 md:p-12 border border-border bg-card/50 backdrop-blur-sm min-h-80 flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl font-light text-foreground mb-8 leading-relaxed">
              "{currentTestimonial.content}"
            </p>

            {/* Author */}
            <div>
              <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
              <p className="text-sm text-accent">{currentTestimonial.title}</p>
              <p className="text-xs text-muted-foreground">{currentTestimonial.company}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="p-2 border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-border hover:bg-accent/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 border border-border hover:border-accent hover:text-accent transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6 text-sm text-muted-foreground">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </section>
  );
}
