import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: any;
  }
}

export default function LuxuryScrollEffects() {
  useEffect(() => {
    const loadGSAP = async () => {
      // Load GSAP
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      gsapScript.async = true;

      gsapScript.onload = () => {
        // Load ScrollTrigger
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        scrollTriggerScript.async = true;

        scrollTriggerScript.onload = () => {
          // Load ScrollToPlugin
          const scrollToScript = document.createElement('script');
          scrollToScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js';
          scrollToScript.async = true;

          scrollToScript.onload = () => {
            initializeLuxuryAnimations();
          };

          document.head.appendChild(scrollToScript);
        };

        document.head.appendChild(scrollTriggerScript);
      };

      document.head.appendChild(gsapScript);
    };

    const initializeLuxuryAnimations = () => {
      if (!window.gsap) return;

      const gsap = window.gsap;
      gsap.registerPlugin(gsap.ScrollTrigger);

      // 1. Hero Section - Parallax with text reveal
      const heroElements = document.querySelectorAll('[data-hero-element]');
      heroElements.forEach((el, idx) => {
        gsap.from(el, {
          opacity: 0,
          y: 50 + idx * 10,
          duration: 1.2,
          ease: 'power2.out',
          delay: idx * 0.15,
        });

        gsap.to(el, {
          yPercent: idx * -5,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section'),
            scrub: 1.5,
            start: 'top center',
            end: 'bottom center',
          },
        });
      });

      // 2. Portfolio Cards - Advanced 3D with stagger
      const portfolioCards = document.querySelectorAll('[data-portfolio-card]');
      gsap.from(portfolioCards, {
        opacity: 0,
        y: 60,
        rotationX: 10,
        duration: 0.8,
        stagger: {
          amount: 0.4,
          from: 'start',
        },
        scrollTrigger: {
          trigger: portfolioCards[0]?.parentElement,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // 3. Services Cards - Gradient animation on scroll
      const serviceCards = document.querySelectorAll('[data-service-card]');
      serviceCards.forEach((card: Element) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.from(card, {
          opacity: 0,
          scale: 0.85,
          duration: 0.6,
          ease: 'back.out',
        });

        // Add continuous subtle rotation on scroll
        gsap.to(card, {
          rotationY: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            scrub: 2,
            start: 'top center',
            end: 'bottom center',
          },
        });
      });

      // 4. Stats Numbers - Flip animation with scale
      const statNumbers = document.querySelectorAll('[data-stat-number]');
      statNumbers.forEach((stat: Element, idx: number) => {
        gsap.from(stat, {
          opacity: 0,
          scale: 0.3,
          rotationZ: -180,
          duration: 0.8,
          delay: idx * 0.1,
          ease: 'back.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        // Subtle floating animation
        gsap.to(stat, {
          y: -10,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      });

      // 5. Testimonials - Slide in with blur
      const testimonialCard = document.querySelector('[data-testimonial-card]');
      if (testimonialCard) {
        gsap.from(testimonialCard, {
          opacity: 0,
          x: -100,
          filter: 'blur(10px)',
          duration: 0.8,
          scrollTrigger: {
            trigger: testimonialCard,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 6. Timeline Items - Alternating reveal with line draw
      const timelineItems = document.querySelectorAll('[data-timeline-item]');
      const timelineContainer = document.querySelector('[data-timeline-container]');

      if (timelineContainer) {
        gsap.from(timelineItems, {
          opacity: 0,
          x: (index: number) => (index % 2 === 0 ? -80 : 80),
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineContainer,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        });

        // Animate timeline line
        const timelineLine = timelineContainer.querySelector('[data-timeline-line]');
        if (timelineLine) {
          gsap.from(timelineLine, {
            scaleY: 0,
            transformOrigin: 'top center',
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: timelineContainer,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      }

      // 7. CTA Section - Dual reveal with stagger
      const ctaHeading = document.querySelector('[data-cta-heading]');
      const ctaButtons = document.querySelectorAll('[data-cta-button]');
      const ctaDescription = document.querySelector('[data-cta-description]');

      if (ctaHeading) {
        gsap.from(ctaHeading, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaHeading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (ctaDescription) {
        gsap.from(ctaDescription, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaDescription,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      if (ctaButtons.length > 0) {
        gsap.from(ctaButtons, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out',
          scrollTrigger: {
            trigger: ctaButtons[0].parentElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // 8. Section Dividers - Animated underlines
      const sectionDividers = document.querySelectorAll('[data-section-divider]');
      sectionDividers.forEach((divider: Element) => {
        gsap.from(divider, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.8,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: divider,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 9. Text Reveals - Character by character effect
      const textRevealElements = document.querySelectorAll('[data-text-reveal]');
      textRevealElements.forEach((element: Element) => {
        gsap.from(element, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 10. Hover Effects - Magnetic buttons
      const magneticButtons = document.querySelectorAll('[data-magnetic-button]');
      magneticButtons.forEach((button: Element) => {
        const btn = button as HTMLElement;
        let mouseX = 0;
        let mouseY = 0;

        btn.addEventListener('mousemove', (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          mouseX = e.clientX - rect.left - rect.width / 2;
          mouseY = e.clientY - rect.top - rect.height / 2;

          gsap.to(btn, {
            x: mouseX * 0.3,
            y: mouseY * 0.3,
            duration: 0.3,
            overwrite: 'auto',
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)',
          });
        });
      });

      // 11. Scroll-triggered counter animations
      const counters = document.querySelectorAll('[data-counter]');
      counters.forEach((counter: Element) => {
        const target = parseInt((counter as HTMLElement).getAttribute('data-target') || '0', 10);
        let current = 0;

        const updateCounter = () => {
          const increment = target / 50;
          current += increment;
          if (current >= target) {
            current = target;
          }
          (counter as HTMLElement).textContent = Math.floor(current).toString();
        };

        gsap.to(counter, {
          onUpdate: updateCounter,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // 12. Parallax sections with depth
      const parallaxSections = document.querySelectorAll('[data-parallax-depth]');
      parallaxSections.forEach((section: Element) => {
        const depth = parseInt((section as HTMLElement).getAttribute('data-parallax-depth') || '1', 10);

        gsap.to(section, {
          yPercent: -15 * depth,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
      });

      // 13. Scroll progress bar
      const progressBar = document.querySelector('[data-scroll-progress]');
      if (progressBar) {
        gsap.to(progressBar, {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5,
          },
        });
      }

      // 14. Staggered list animations
      const listItems = document.querySelectorAll('[data-list-item]');
      gsap.from(listItems, {
        opacity: 0,
        x: -30,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listItems[0]?.parentElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // 15. Refresh ScrollTrigger on window resize
      window.addEventListener('resize', () => {
        gsap.ScrollTrigger.getAll().forEach((trigger: any) => trigger.refresh());
      });
    };

    loadGSAP();
  }, []);

  return null;
}
