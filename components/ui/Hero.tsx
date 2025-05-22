"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simulate animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);

    // Parallax effect for the hero image
    const handleMouseMove = (e: MouseEvent) => {
      if (heroImageRef.current) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        heroImageRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <header className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Background image with subtle parallax */}
      <div 
        ref={heroImageRef}
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20"></div>
        <img 
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop" 
          alt="ZYBERAX Fashion" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content container */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="max-w-2xl">
          {/* Animated accent line */}
          <div 
            className="w-16 h-px bg-[#7888FF] mb-8 md:mb-12"
            style={{ 
              opacity: isLoaded ? 1 : 0, 
              width: isLoaded ? '4rem' : '0',
              transition: 'opacity 1s ease-out, width 1.5s ease-out',
            }}
          ></div>
          
          {/* Hero headline with staggered animation */}
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            <span 
              className="block"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                transitionDelay: '0.2s'
              }}
            >
              Modern Essentials
            </span>
            <span 
              className="block text-[#7888FF]"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                transitionDelay: '0.4s'
              }}
            >
              Timeless Quality
            </span>
          </h1>
          
          {/* Description */}
          <p 
            className="text-[#E0E0E0] text-lg mb-10 max-w-md"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out',
              transitionDelay: '0.6s'
            }}
          >
            Premium fabrics. Meticulous craftsmanship. Minimalist design that transcends trends and seasons.
          </p>
          
          {/* Call to action buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out',
              transitionDelay: '0.8s'
            }}
          >
            <Link href="/shop">
              <button className="px-12 py-4 bg-white text-black font-light tracking-wider hover:bg-[#7888FF] hover:text-white transition-colors duration-300">
                SHOP NOW
              </button>
            </Link>
            <Link href="/about">
              <button className="px-12 py-4 border border-white text-white font-light tracking-wider hover:border-[#7888FF] hover:text-[#7888FF] transition-colors duration-300">
                DISCOVER
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom accent */}
      <div 
        className="absolute bottom-10 left-0 right-0 z-30 flex justify-center"
        style={{
          opacity: isLoaded ? 0.7 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
          transitionDelay: '1s'
        }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white to-[#7888FF]"></div>
      </div>
    </header>
  );
}
