import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import ParticleNetwork from './ParticleNetwork';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Auditor", "BBA Student", "Photographer"];
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[textIndex % words.length];
      
      if (isDeleting) {
        setCurrentWord(fullWord.substring(0, currentWord.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentWord(fullWord.substring(0, currentWord.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setTextIndex(textIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, textIndex, typingSpeed, words]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <ParticleNetwork />

      {/* Additional Static Background Elements (Subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large faint triangle top right */}
        <svg className="absolute -top-20 -right-20 w-[600px] h-[600px] text-gray-50 opacity-70" viewBox="0 0 100 100" fill="currentColor">
           <path d="M0 0 L100 0 L100 100 Z" />
        </svg>

        {/* Floating outlined triangle */}
        <svg className="absolute top-1/4 left-[10%] w-16 h-16 text-primary opacity-20" viewBox="0 0 100 100" style={{ transform: 'rotate(15deg)' }}>
           <polygon points="50,5 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 space-y-4 md:space-y-6 text-center md:text-left">
          <RevealOnScroll>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">Hi There,</h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              I'm <span className="text-primary">Niraj Khaniya</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 h-8 md:h-10">
              i am into <span className="text-primary typing-cursor">{currentWord}</span>
            </div>
            
            <div className="pt-6">
              <a href="#about" className="inline-flex items-center px-6 py-3 md:px-8 md:py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:-translate-y-1 text-sm md:text-base">
                About Me <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <RevealOnScroll delay={200}>
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 md:border-8 border-gray-100 shadow-xl z-20">
               <img 
                 src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1000&auto=format&fit=crop" 
                 alt="Niraj Khaniya" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            {/* Decorative element behind image */}
            <div className="absolute top-10 right-10 w-full h-full rounded-full border-2 border-primary/20 -z-10 scale-105 hidden md:block"></div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Hero;
