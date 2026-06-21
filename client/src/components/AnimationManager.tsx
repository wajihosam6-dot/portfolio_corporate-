import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: any;
  }
}

export const useGSAPAnimations = () => {
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
          initializeAnimations();
        };
        document.head.appendChild(scrollTriggerScript);
      };
      document.head.appendChild(gsapScript);
    };

    const initializeAnimations = () => {
      if (!window.gsap) return;

      const gsap = window.gsap;
      gsap.registerPlugin(gsap.ScrollTrigger);

      // Animation 1: Hero elements fade-in with stagger
      const heroElements = document.querySelectorAll('.hero-element');
      if (heroElements.length > 0) {
        gsap.from(heroElements, {
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.15,
          ease: 'power2.out',
        });
      }

      // Animation 2: Section titles fade-in on scroll
      const sectionTitles = document.querySelectorAll('h2');
      sectionTitles.forEach((title: Element) => {
        gsap.from(title, {
          opacity: 0,
          x: -50,
          duration: 0.8,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Animation 3: Cards fade-in on scroll with stagger
      const cards = document.querySelectorAll('[data-card]');
      cards.forEach((card: Element) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Animation 4: Parallax effect on images
      const parallaxImages = document.querySelectorAll('[data-parallax]');
      parallaxImages.forEach((img: Element) => {
        gsap.to(img, {
          yPercent: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
      });

      // Animation 5: Counter animation for stats
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat: Element) => {
        const finalValue = parseInt((stat as HTMLElement).textContent || '0', 10);
        gsap.from(stat, {
          textContent: 0,
          duration: 2,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            (stat as HTMLElement).textContent = Math.ceil(this.progress() * finalValue).toString();
          },
        });
      });

      // Animation 6: Magnetic hover effect on buttons
      const buttons = document.querySelectorAll('.btn-gold-border');
      buttons.forEach((button: Element) => {
        const btn = button as HTMLElement;
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Animation 7: Border animation on hover for cards
      const hoverCards = document.querySelectorAll('[data-hover-border]');
      hoverCards.forEach((card: Element) => {
        const cardEl = card as HTMLElement;
        cardEl.addEventListener('mouseenter', () => {
          gsap.to(cardEl, {
            borderColor: '#D4AF37',
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        cardEl.addEventListener('mouseleave', () => {
          gsap.to(cardEl, {
            borderColor: '#333333',
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Animation 8: Scroll-triggered line animation
      const dividers = document.querySelectorAll('.divider-gold');
      dividers.forEach((divider: Element) => {
        gsap.from(divider, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.8,
          scrollTrigger: {
            trigger: divider,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Animation 9: Text reveal animation
      const textElements = document.querySelectorAll('[data-text-reveal]');
      textElements.forEach((element: Element) => {
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

      // Animation 10: Smooth scroll behavior with GSAP
      document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
        const link = anchor as HTMLAnchorElement;
        link.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power2.inOut',
              });
            }
          }
        });
      });
    };

    loadGSAP();
  }, []);
};

export default function AnimationManager() {
  useGSAPAnimations();
  return null;
}
