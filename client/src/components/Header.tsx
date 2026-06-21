import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663780550187/Y2Eb3Mz7xprd2LR2FtzMNh/brand-logo-j67iZpeNk8944cCuuu7WJP.png"
            alt="MA Logo"
            className="w-8 h-8"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-widest text-accent">MOHAMMED</span>
            <span className="text-xs tracking-widest text-muted-foreground">ALAVI</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="label-uppercase text-xs hover:text-accent transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('expertise')}
            className="label-uppercase text-xs hover:text-accent transition-colors duration-300"
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="label-uppercase text-xs hover:text-accent transition-colors duration-300"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('insights')}
            className="label-uppercase text-xs hover:text-accent transition-colors duration-300"
          >
            Insights
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="btn-gold-border text-xs">
            DOWNLOAD CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-accent" />
          ) : (
            <Menu className="w-6 h-6 text-accent" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="label-uppercase text-xs hover:text-accent transition-colors duration-300 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="label-uppercase text-xs hover:text-accent transition-colors duration-300 text-left"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="label-uppercase text-xs hover:text-accent transition-colors duration-300 text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="label-uppercase text-xs hover:text-accent transition-colors duration-300 text-left"
            >
              Insights
            </button>
            <button className="btn-gold-border text-xs w-full">
              DOWNLOAD CV
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
