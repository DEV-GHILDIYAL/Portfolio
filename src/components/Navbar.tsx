import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tools', href: '#tools' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection based on scroll position
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].href);
          return;
        }
      }
      
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bg-dark/80 backdrop-blur-md border-b border-border-subtle py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 text-text-primary hover:text-brand-green transition-colors group"
        >
          <Terminal size={24} className="text-brand-green group-hover:animate-pulse" />
          <span className="font-mono font-bold tracking-tight text-lg hidden sm:block">
            ghildiyal<span className="text-brand-green">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-text-primary ${
                activeSection === link.href ? 'text-brand-green' : 'text-text-secondary'
              }`}
            >
              <span className="font-mono text-brand-green mr-1 opacity-70">/</span>
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="/assets/Dev%20Ghildiyal%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm px-4 py-2 border border-brand-green/30 text-brand-green rounded hover:bg-brand-green-glow transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
