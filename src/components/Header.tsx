import { useState, useEffect } from 'react';
import { Menu, X, Github, GraduationCap, Mail } from 'lucide-react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: SectionId.HERO },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Projects', id: SectionId.PROJECTS },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection(SectionId.HERO)}>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-indigo-400">
              HP.
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="h-4 w-px bg-slate-700 mx-2"></div>
             <div className="flex items-center gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                    <Github size={18} />
                </a>
                <a href={PERSONAL_INFO.googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Google Scholar">
                    <GraduationCap size={18} />
                </a>
            </div>
            <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors font-medium"
            >
                E-Mail
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded-md"
              >
                {link.label}
              </button>
            ))}
             <div className="flex items-center gap-6 px-3 py-3 mt-4 border-t border-slate-700">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <Github size={20} />
                </a>
                <a href={PERSONAL_INFO.googleScholar} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                    <GraduationCap size={20} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white">
                    <Mail size={20} />
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
