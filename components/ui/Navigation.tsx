"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full px-6 md:px-16 py-6 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/70 backdrop-blur-md border-b border-[#333333]' : 'bg-transparent'
        }`}
      >
        <div 
          className="flex justify-between items-center opacity-0 transition-all duration-600 ease-out"
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          <Link href="/">
            <div 
              className="text-[#F5F5F5] font-bold text-lg tracking-[0.25em] uppercase animate-pulse-glow"
            >
              ZYBERAX
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-10 text-[#A0A0A0] text-sm tracking-widest">
            <Link href="/shop" className="hover:text-[#7888FF] transition-colors duration-300 relative group">
              SHOP
              <span 
                className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
            <Link href="/collections" className="hover:text-[#7888FF] transition-colors duration-300 relative group">
              COLLECTIONS
              <span 
                className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
            <Link href="/about" className="hover:text-[#7888FF] transition-colors duration-300 relative group">
              ABOUT
              <span 
                className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-[#F5F5F5] p-1.5 border border-[#333333] hover:border-[#7888FF] transition-colors duration-300 hover:scale-105 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          clipPath: isMenuOpen ? 'circle(150% at top right)' : 'circle(0% at top right)'
        }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-8 text-2xl font-light">
            <Link 
              href="/shop" 
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
              <span 
                className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
            <Link 
              href="/collections" 
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              COLLECTIONS
              <span 
                className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
            <Link 
              href="/about" 
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
              <span 
                className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"
              ></span>
            </Link>
          </div>
          
          {/* Mobile menu accents */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#7888FF]/30 animate-spin-slow opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#7888FF]/20 animate-reverse-spin-slow opacity-10"></div>
        </div>
      </div>
    </>
  );
} 