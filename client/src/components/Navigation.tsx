import { useLocation } from 'wouter';

interface NavItem {
  number: string;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { number: '01', label: 'HOME', id: 'home' },
  { number: '02', label: 'ABOUT', id: 'about' },
  { number: '03', label: 'EXPERTISE', id: 'expertise' },
  { number: '04', label: 'EXPERIENCE', id: 'experience' },
  { number: '05', label: 'INSIGHTS', id: 'insights' },
  { number: '06', label: 'CONTACT', id: 'contact' },
];

export default function Navigation() {
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-8 pl-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group flex flex-col items-start gap-2 cursor-pointer transition-all duration-300"
            aria-label={`Navigate to ${item.label}`}
          >
            {/* Vertical line separator */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Number and label */}
            <div className="flex flex-col gap-1">
              <span className="section-number text-xs tracking-widest">
                {item.number}
              </span>
              <span className="label-uppercase text-xs tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
}
