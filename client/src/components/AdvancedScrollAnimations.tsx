import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: any;
  }
}

export const useAdvancedScrollAnimations = () => {
  useEffect(() => {
    const loadGSAP = async () => {
      // Load GSAP
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      gsapScript.onload = () => {
        // Load ScrollTrigger
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        scrollTriggerScript.onload = () => {
          initializeAdvancedAnimations();
        };
        document.head.appendChild(scrollTriggerScript);
      };
      document.head.appendChild(gsapScript);
    };

    const initializeAdvancedAnimations = () => {
      if (!window.gsap) return;

      const gsap = window.gsap;
      gsap.registerPlugin(gsap.ScrollTrigger);

      // 1. Staggered card reveals
      const cards = document.querySelectorAll('[data-project-card]');
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: cards[0].parentElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 2. Service cards - scale and fade
      const serviceCards = document.querySelectorAll('[data-service-card]');
      serviceCards.forEach((card: Element) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.9,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 3. Timeline items - alternating animation
      const timelineItems = document.querySelectorAll('[data-timeline-item]');
      timelineItems.forEach((item: Element, index: number) => {
        const direction = index % 2 === 0 ? -50 : 50;
        gsap.from(item, {
          opacity: 0,
          x: direction,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 4. Stats counter animation with scale
      const statNumbers = document.querySelectorAll('[data-stat-number]');
      statNumbers.forEach((stat: Element) => {
        gsap.from(stat, {
          opacity: 0,
          scale: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 5. Testimonial slide animation
      const testimonialCard = document.querySelector('[data-testimonial-card]');
      if (testimonialCard) {
        gsap.from(testimonialCard, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          scrollTrigger: {
            trigger: testimonialCard,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 6. CTA section - dual animation
      const ctaHeading = document.querySelector('[data-cta-heading]');
      const ctaButtons = document.querySelectorAll('[data-cta-button]');

      if (ctaHeading) {
        gsap.from(ctaHeading, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaHeading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (ctaButtons.length > 0) {
        gsap.from(ctaButtons, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ctaButtons[0].parentElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 7. Parallax sections
      const parallaxElements = document.querySelectorAll('[data-parallax-section]');
      parallaxElements.forEach((element: Element) => {
        gsap.to(element, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
      });

      // 8. Animated underlines
      const underlineElements = document.querySelectorAll('[data-animated-underline]');
      underlineElements.forEach((element: Element) => {
        const underline = element.querySelector('.animated-underline') as HTMLElement;
        if (underline) {
          element.addEventListener('mouseenter', () => {
            gsap.to(underline, {
              width: '100%',
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          element.addEventListener('mouseleave', () => {
            gsap.to(underline, {
              width: '0%',
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        }
      });

      // 9. Scroll-triggered text reveal
      const textRevealElements = document.querySelectorAll('[data-text-reveal]');
      textRevealElements.forEach((element: Element) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 10. Smooth scroll to sections
      document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
        const link = anchor as HTMLAnchorElement;
        link.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              gsap.to(window, {
                duration: 1.2,
                scrollTo: target,
                ease: 'power2.inOut',
              });
            }
          }
        });
      });

      // Load ScrollToPlugin for smooth scroll
      const scrollToScript = document.createElement('script');
      scrollToScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js';
      scrollToScript.onload = () => {
        if (window.gsap) {
          window.gsap.registerPlugin(window.gsap.ScrollToPlugin);
        }
      };
      document.head.appendChild(scrollToScript);
    };

    loadGSAP();
  }, []);
};

export default function AdvancedScrollAnimations() {
  useAdvancedScrollAnimations();
  return null;
}
