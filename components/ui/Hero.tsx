"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const gridRef = useRef<HTMLDivElement>(null);
  const hologramRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Generate static particle positions to avoid hydration mismatch
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    key: i,
    left: `${i * 5}%`,
    top: `${(i * 7) % 100}%`,
    opacity: 0.3 + (i % 7) * 0.1,
    duration: 20 + (i % 5) * 5,
    delay: i * 0.5
  }));
  
  // Pre-compute data point positions to avoid hydration mismatch
  const dataPoints = Array.from({ length: 10 }).map((_, i) => {
    // Use a simpler formula that doesn't rely on Math.cos/sin which may have precision differences
    const angle = (i / 10); // Normalized angle between 0 and 1
    return {
      key: i,
      left: `${20 + (i * 8) % 70}%`, // Simple pattern based on index
      top: `${15 + (i * 7) % 70}%`,  // Simple pattern based on index
      delay: i * 0.2
    };
  });

  useEffect(() => {
    // Simulate animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as a percentage of the window
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Move grid pattern with mouse for parallax effect
      if (gridRef.current) {
        const moveX = (0.5 - x) * 20;
        const moveY = (0.5 - y) * 20;
        gridRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
      
      // Hologram parallax effect
      if (hologramRef.current) {
        const hologramX = (0.5 - x) * 15;
        const hologramY = (0.5 - y) * 15;
        hologramRef.current.style.transform = `translate(${hologramX}px, ${hologramY}px) rotateY(${hologramX * 0.3}deg) rotateX(${-hologramY * 0.3}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setAudioEnabled(!audioEnabled);
    }
  };

  // Parallax effect calculations
  const moveX = mousePosition.x * 20; // 20px max movement
  const moveY = mousePosition.y * 20; // 20px max movement

  return (
    <header className="relative w-full min-h-screen bg-[#000000] overflow-hidden flex items-center">
      {/* Audio element for ambient cyberpunk sound */}
      <audio ref={audioRef} loop src="/ambient.mp3" className="hidden" />

      {/* Custom cursor */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-[100] mix-blend-screen"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isLoaded ? 0.7 : 0,
          transition: 'opacity 500ms ease-out'
        }}
      >
        <div className="absolute inset-0 border border-[#7888FF] rounded-full animate-pulse"></div>
        <div className="absolute inset-2 border-t border-r border-[#7888FF] rounded-full animate-spin-slow"></div>
      </div>

      {/* Animated particles in background */}
      <div className="absolute inset-0 z-0 opacity-10">
        {particles.map((particle) => (
          <div
            key={particle.key}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{ 
              left: particle.left, 
              top: particle.top,
              opacity: particle.opacity,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced grid overlay for tech feel with parallax effect */}
      <div 
        ref={gridRef} 
        className="absolute inset-0 z-0 opacity-10 transition-transform duration-500 ease-out"
      >
        <div className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(to right, #4A5568 1px, transparent 1px), linear-gradient(to bottom, #4A5568 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>

      {/* Animated scan line effect */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none animate-scan-line"
      >
        <div className="w-full h-20 bg-gradient-to-b from-transparent via-[#7888FF] to-transparent blur-sm"></div>
      </div>

      {/* Enhanced ambient light effects */}
      <div 
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#2C3B8F] to-transparent opacity-0 blur-[150px] transition-opacity duration-1000 ease-in-out animate-pulse-slow"
        style={{ 
          opacity: isLoaded ? 0.6 : 0,
          transform: `translate(${moveX * 0.5}px, ${moveY * 0.5}px)`
        }}
      />
      
      <div 
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#3D1A5A] to-transparent opacity-0 blur-[180px] transition-opacity duration-1000 ease-in-out animate-pulse-slow"
        style={{ 
          opacity: isLoaded ? 0.7 : 0,
          transform: `translate(${-moveX * 0.3}px, ${-moveY * 0.3}px)`,
          animationDuration: '10s'
        }}
      />

      {/* Cyberpunk-style interface elements */}
      <div className="absolute top-28 right-8 md:top-32 md:right-20 z-10 opacity-0 transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 0.6 : 0 }}>
        <div 
          className="border border-[#7888FF]/30 p-2 bg-black/30 backdrop-blur-sm animate-pulse-border group hover:border-[#7888FF]/60 transition-all duration-300 cursor-pointer"
          onClick={toggleAudio}
        >
          <div className="text-[10px] font-mono text-[#7888FF] whitespace-nowrap flex items-center gap-2">
            <span>AUDIO.SYS:</span>
            <span className={`${audioEnabled ? 'text-[#7CFF78]' : 'text-[#FF7878]'}`}>
              {audioEnabled ? 'ENABLED' : 'DISABLED'}
            </span>
            <span className={`w-2 h-2 rounded-full ${audioEnabled ? 'bg-[#7CFF78] animate-pulse' : 'bg-[#FF7878]'}`}></span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 left-8 md:bottom-32 md:left-20 z-10 opacity-0 transition-opacity duration-1000"
        style={{ opacity: isLoaded ? 0.6 : 0 }}>
        <div 
          className="border border-[#7888FF]/30 p-2 bg-black/30 backdrop-blur-sm animate-pulse-border"
          style={{ animationDelay: '1s' }}
        >
          <div className="text-[10px] font-mono text-[#7888FF] whitespace-nowrap">ID: ZYB-X2340</div>
        </div>
      </div>

      {/* Content container - improved layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text content - improved alignment */}
          <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left space-y-8"  
            style={{ 
              opacity: isLoaded ? 1 : 0, 
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 800ms ease-out, transform 800ms ease-out',
              transitionDelay: '200ms'
            }}>
            {/* Animated tech line above headline */}
            <div 
              className="w-16 h-[1px] bg-[#7888FF] hidden md:block animate-width-pulse"
            ></div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
              <span 
                className="block text-[#F5F5F5] mb-2 animate-fade-in-left"
                style={{ animationDelay: '500ms' }}
              >
                Crafted for
              </span>
              <span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-[#7888FF] via-[#DCDEFF] to-[#7888FF] animate-fade-in-left"
                style={{ animationDelay: '800ms' }}
              >
                Tomorrow
              </span>
          </h1>
          
          <p 
              className="text-[#A0A0A0] text-base md:text-lg max-w-md mx-auto md:mx-0 font-light tracking-wider animate-fade-in"
              style={{ animationDelay: '1000ms' }}
          >
              Minimal design meets future-grade fabrics, engineered for the digital age.
              <span className="text-[#7888FF]"> Redefining tomorrow's lifestyle.</span>
          </p>
          
          <div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate-fade-in"
              style={{ animationDelay: '1200ms' }}
          >
            <Link href="/shop">
              <button 
                  className="bg-[#7888FF] text-[#000000] px-8 py-3 rounded-none font-medium hover:bg-[#96A3FF] transition-all duration-300 relative overflow-hidden group hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Shop Now</span>
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-[#7888FF] via-[#DCDEFF] to-[#7888FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-pos-animate"
                    style={{
                      backgroundSize: '200% 200%'
                    }}
                  ></span>
              </button>
            </Link>
            
            <Link href="/collection">
              <button 
                  className="border border-[#333333] text-[#F5F5F5] px-8 py-3 rounded-none font-medium hover:border-[#7888FF] transition-all duration-300 relative overflow-hidden group hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Explore</span>
                  <span 
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-[#7888FF] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 animate-pulse-opacity"
                  ></span>
              </button>
            </Link>
          </div>
            
            {/* Terminal-like status display */}
            <div 
              className="hidden md:block mt-12 border border-[#333333] bg-[#080808]/80 p-4 max-w-xs animate-fade-in"
              style={{ animationDelay: '1400ms' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7878]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFBE78]"></div>
                <div className="w-2 h-2 rounded-full bg-[#7CFF78]"></div>
                <div className="text-xs text-[#A0A0A0] ml-2 font-mono">system.status</div>
              </div>
              <div className="font-mono text-xs text-[#7888FF] overflow-hidden h-20">
                <div className="animate-type-writer whitespace-nowrap">
                  {'> initializing system...'}
                  <br />
                  {'> checking dependencies...'}
                  <br />
                  {'> loading quantum modules...'}
                  <br />
                  {'> connection established'}
                  <br />
                  {'> welcome to ZYBERAX'}
                </div>
              </div>
          </div>
        </div>
        
          {/* Creative Futuristic 3D Hologram Display - replacing the photo */}
        <div 
            className="w-full md:w-1/2 lg:w-2/5 mt-8 md:mt-0"
          style={{ 
            opacity: isLoaded ? 1 : 0, 
            transform: isLoaded ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            transitionDelay: '500ms'
          }}
        >
            {/* Holographic Container */}
            <div className="relative mx-auto max-w-sm md:max-w-md h-[600px]">
            {/* Border frame */}
              <div className="absolute -top-4 -left-4 w-full h-[600px] border border-[#7888FF]/30 z-0 animate-pulse-border"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-[600px] border border-[#333333] z-0 animate-pulse-border-alt"></div>
              
              {/* Interactive touch points */}
              <div 
                className="absolute -right-6 top-1/3 z-20 flex flex-col gap-4 opacity-0 transition-opacity duration-1000"
                style={{ 
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: '1200ms'
                }}
              >
                {Array.from({ length: 3 }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-3 h-3 rounded-full bg-[#7888FF]/30 cursor-pointer group relative hover:bg-[#7888FF]/60 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-full bg-[#7888FF]/30 animate-ping-small"></div>
                    <div 
                      className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm border border-[#333333] px-2 py-1 text-[10px] font-mono text-[#7888FF] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    >
                      {i === 0 ? 'CORE.SYSTEM' : i === 1 ? 'QUANTUM.MESH' : 'NEURAL.NETWORK'}
                    </div>
                  </div>
                ))}
              </div>
            
              {/* Holographic container */}
              <div 
                ref={hologramRef}
                className="relative z-10 w-full h-[600px] backdrop-blur-[2px] overflow-hidden bg-black/30 transition-all duration-500 ease-out cursor-crosshair"
              >
                {/* Base platform with light */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-6 rounded-full bg-black border border-[#333333]">
                  <div className="absolute inset-0 rounded-full bg-[#7888FF]/10 animate-pulse-glow"></div>
                </div>
                
                {/* Vertical light beam */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1 h-[500px] bg-gradient-to-t from-[#7888FF] to-transparent opacity-80 blur-sm"></div>
                
                {/* Horizontal scan lines */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-full h-[1px] bg-[#7888FF]/10"
                    style={{ 
                      top: `${(i * 20) + 10}px`,
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0.1 + ((i % 3) * 0.05)
                    }}
                  ></div>
                ))}
                
                {/* Holographic model - cybernetic shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[350px] animate-float" style={{ animationDuration: '15s' }}>
                  {/* Main geometric shape - hexagon */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Core hexagonal shape */}
                    <div className="w-64 h-64 relative animate-spin-slow">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Hexagonal shape */}
                        <polygon 
                          points="50,3 100,28 100,72 50,97 0,72 0,28" 
                          fill="none" 
                          stroke="#7888FF" 
                          strokeWidth="0.5"
                          className="animate-pulse-opacity"
                        />
                        {/* Enhanced inner details */}
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#7888FF" strokeWidth="0.5" className="animate-pulse-opacity" style={{ animationDelay: '0.5s' }} />
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#7888FF" strokeWidth="0.3" className="animate-pulse-opacity" style={{ animationDelay: '1s' }} />
                        <circle cx="50" cy="50" r="10" fill="none" stroke="#7888FF" strokeWidth="0.8" className="animate-pulse-opacity" style={{ animationDelay: '1.5s' }} />
                        
                        <line x1="0" y1="50" x2="100" y2="50" stroke="#7888FF" strokeWidth="0.2" className="animate-pulse-opacity" />
                        <line x1="50" y1="0" x2="50" y2="100" stroke="#7888FF" strokeWidth="0.2" className="animate-pulse-opacity" />
                        
                        {/* Additional technical details */}
                        <path d="M20,20 L30,30 L40,20 L50,30" stroke="#7888FF" strokeWidth="0.2" fill="none" />
                        <path d="M60,70 L70,80 L80,70 L90,80" stroke="#7888FF" strokeWidth="0.2" fill="none" />
                        <path d="M20,80 L30,70 L40,80 L50,70" stroke="#7888FF" strokeWidth="0.2" fill="none" />
                        <path d="M60,20 L70,30 L80,20 L90,30" stroke="#7888FF" strokeWidth="0.2" fill="none" />
                      </svg>
                    </div>
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-reverse-spin-slow">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#7888FF]/70 blur-sm animate-pulse-glow"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#7888FF]/70 blur-sm animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 rounded-full bg-[#7888FF]/70 blur-sm animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#7888FF]/70 blur-sm animate-pulse-glow" style={{ animationDelay: '0.7s' }}></div>
                      
                      {/* Satellite elements */}
                      <div className="absolute top-1/4 right-1/4 w-6 h-6">
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 border border-[#7888FF]/40 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7888FF]/60 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-1/4 left-1/4 w-5 h-5">
                        <div className="w-full h-full relative">
                          <div className="absolute inset-0 border border-[#7888FF]/40 rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#7888FF]/60 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Central Core - enhanced with inner elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#7888FF]/30 to-[#DCDEFF]/30 animate-pulse-glow z-10" style={{ animationDuration: '3s' }}>
                      <div className="absolute inset-2 rounded-full border border-[#7888FF]/50 animate-spin-slow"></div>
                      <div className="absolute inset-4 rounded-full bg-[#7888FF]/20 animate-pulse-glow" style={{ animationDuration: '2s' }}></div>
                      <div className="absolute inset-6 rounded-full bg-[#7888FF]/60 blur-sm"></div>
                      
                      {/* Inner core */}
                      <div className="absolute inset-8 rounded-full bg-white/80 animate-pulse" style={{ animationDuration: '1s' }}></div>
                    </div>
                    
                    {/* Floating descriptors */}
                    <div className="absolute top-[20%] left-[60%] flex items-center">
                      <div className="w-24 h-px bg-[#7888FF]/50"></div>
                      <div className="ml-2 px-2 py-1 bg-black/60 border border-[#7888FF]/30 text-[8px] font-mono text-[#7888FF]">
                        QUANTUM.CORE
                      </div>
                    </div>
                    
                    <div className="absolute bottom-[30%] right-[20%] flex items-center">
                      <div className="w-16 h-px bg-[#7888FF]/50"></div>
                      <div className="ml-2 px-2 py-1 bg-black/60 border border-[#7888FF]/30 text-[8px] font-mono text-[#7888FF]">
                        NEURAL.NODE
                      </div>
                    </div>
                  </div>
              
                  {/* Data points with pre-computed positions */}
                  {dataPoints.map((point) => (
                    <div 
                      key={point.key} 
                      className="absolute" 
                      style={{ 
                        left: point.left, 
                        top: point.top,
                        width: "4px",
                        height: "4px" 
                      }}>
                      <div 
                        className="absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#7888FF] rounded-full animate-pulse-glow" 
                        style={{ animationDelay: `${point.delay}s` }}>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Holographic glitch effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#7888FF]/5 to-transparent opacity-30 animate-scan-line" style={{ animationDuration: '3s' }}></div>
              
                {/* Holographic noise */}
                <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay"></div>
                
                {/* Ambient glow from base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[150px] bg-gradient-to-t from-[#7888FF]/20 to-transparent rounded-full blur-xl"></div>
                
                {/* Interface elements */}
                <div className="absolute bottom-10 left-6 p-2 border border-[#7888FF]/30 bg-black/30 backdrop-blur-sm animate-pulse-border group hover:border-[#7888FF]/60 transition-all duration-300 cursor-pointer">
                  <div className="text-[10px] font-mono text-[#7888FF] whitespace-nowrap group-hover:text-white transition-colors duration-300">ZB-HOLO.3D</div>
                </div>
                
                <div className="absolute top-10 right-6 p-2 border border-[#7888FF]/30 bg-black/30 backdrop-blur-sm animate-pulse-border group hover:border-[#7888FF]/60 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1s' }}>
                  <div className="text-[10px] font-mono text-[#7888FF] whitespace-nowrap group-hover:text-white transition-colors duration-300">RENDER.v5.82</div>
                </div>
                
                {/* Enhanced data stream */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] overflow-hidden h-4">
                  <div className="text-[8px] font-mono text-[#7888FF]/70 whitespace-nowrap animate-text-scroll">
                    DATA:01001010 SECTOR:ZYB-X2340 STREAM:0xFF8372 PROTOCOL:QUANTUM-MESH LAT:37.7749 LONG:122.4194 SYNC:99.72% UPTIME:43892h NODES:372 PING:3ms ID:X9372-ZB AUTH:VALID
                  </div>
                </div>
                
                {/* Status readouts */}
                <div className="absolute bottom-24 right-6 w-32">
                  <div className="text-[8px] font-mono text-[#7888FF] mb-1">SYSTEM STATUS</div>
                  <div className="w-full h-1 bg-[#333333] overflow-hidden">
                    <div className="h-full w-[85%] bg-[#7888FF] animate-pulse-width"></div>
                  </div>
                  <div className="flex justify-between text-[7px] font-mono mt-1">
                    <div className="text-[#A0A0A0]">0%</div>
                    <div className="text-[#7888FF]">85%</div>
                    <div className="text-[#A0A0A0]">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator with animation */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-1000 ease-in-out z-20 animate-bounce-slow"
        style={{ opacity: isLoaded ? 0.8 : 0 }}
      >
        <div className="flex flex-col items-center">
          <div className="text-xs tracking-widest text-[#7888FF] mb-2">SCROLL</div>
          <div 
            className="w-[1px] h-10 bg-gradient-to-b from-[#7888FF] to-transparent animate-pulse-scale"
          ></div>
        </div>
      </div>
    </header>
  );
}
