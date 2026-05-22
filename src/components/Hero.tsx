import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import { SectionId } from '../types';

const Typewriter = ({ phrases }: { phrases: string[] }) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleType = () => {
      setCurrentText(prev => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1) 
          : fullText.substring(0, prev.length + 1)
      );

      // Adjust speed based on action
      setTypingSpeed(isDeleting ? 40 : 80);

      // Pause at end of phrase
      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(2000); // Wait 2s before deleting
        setIsDeleting(true);
      } 
      // Move to next phrase
      else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        setTypingSpeed(500); // Wait 0.5s before typing next
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <span className="inline-flex items-center">
      <span className="mr-1 min-h-[1.5em]">{currentText}</span>
      <span className="w-[3px] h-[1.2em] bg-primary-400 animate-pulse"></span>
    </span>
  );
};

const Hero = () => {
  // Parse tagline into phrases
  const phrases = PERSONAL_INFO.tagline
    .split('.')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  return (
    <section 
        id={SectionId.HERO} 
        className="relative flex items-start justify-center pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="space-y-5 max-w-4xl mx-auto">
            <div className="inline-block animate-fade-in-up">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20 mb-4">
                    Welcome to My Homepage
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in-up animation-delay-150">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">{PERSONAL_INFO.name}</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 min-h-[3rem] flex items-center justify-center">
                <Typewriter phrases={phrases} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
