"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

// Define the component as a function component
function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridCells, setGridCells] = useState<Array<{ highlight: boolean, delay: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Timeline data
  const timeline = [
    { year: "2018", title: "INCEPTION", description: "The concept of ZYBERAX was born from a vision to create clothing that bridges the gap between technical functionality and minimalist design." },
    { year: "2020", title: "FOUNDATION", description: "First collection launched with a focus on essential pieces redesigned with a futuristic approach and technical fabrics." },
    { year: "2022", title: "EVOLUTION", description: "Expanded into a full range of technical apparel with our signature minimalist aesthetic, gaining recognition in avant-garde fashion circles." },
    { year: "2024", title: "RENAISSANCE", description: "Current era represents our commitment to sustainable innovation while pushing the boundaries of functional fashion." }
  ];

  // Team members
  const team = [
    { name: "Rayan Khan", role: "FOUNDER", image: "https://dummyimage.com/300x300/111111/7888ff&text=AV" },
    { name: "Yakub Pasha", role: "Co-Founder", image: "https://dummyimage.com/300x300/111111/7888ff&text=NC" },
    { name: "ZYBERUS", role: "TECHNICAL DEVELOPMENT", image: "https://dummyimage.com/300x300/111111/7888ff&text=EK" }
  ];

  // Core values
  const values = [
    { id: "01", title: "MINIMALISM", description: "Stripping away the unnecessary to focus on what truly matters in design and function." },
    { id: "02", title: "INNOVATION", description: "Constantly pushing boundaries through experimentation with materials and construction." },
    { id: "03", title: "SUSTAINABILITY", description: "Creating products with longevity, minimal waste, and responsible sourcing." },
    { id: "04", title: "UTILITY", description: "Designing for purpose with attention to functionality and versatility." }
  ];

  // Initialize grid cells with randomization on client-side only
  useEffect(() => {
    const cellsArray = Array.from({ length: 144 }, () => ({
      highlight: Math.random() > 0.92,
      delay: Math.random() * 5
    }));
    setGridCells(cellsArray);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sections = containerRef.current.querySelectorAll('section');
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop - 300 && scrollPosition < sectionTop + sectionHeight - 300) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* Loading screen */}
      <div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: isLoaded ? 0 : 1,
          visibility: isLoaded ? "hidden" : "visible",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-2xl text-[#7888FF] font-bold tracking-widest mb-4">
            ZYBERAX
          </div>
          <div className="w-40 h-1 bg-[#111111] overflow-hidden">
            <div className="h-full w-full bg-[#7888FF] animate-progress origin-left"></div>
          </div>
          <div className="text-xs text-[#A0A0A0] mt-4 font-mono">
            LOADING MANIFESTO
          </div>
        </div>
      </div>

      {/* Custom cursor for desktop */}
      <div 
        className="fixed w-6 h-6 border border-[#7888FF] rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-6">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index ? 'bg-[#7888FF] scale-150' : 'bg-[#333333]'
              }`}
              onClick={() => {
                const sections = containerRef.current?.querySelectorAll('section');
                if (sections && sections[index]) {
                  window.scrollTo({
                    top: sections[index].offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
            />
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background grid */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-30">
            {gridCells.map((cell, i) => (
              <div 
                key={i} 
                className="border-[0.5px] border-[#333333] relative" 
              >
                {cell.highlight && (
                  <div 
                    className="absolute inset-0 bg-[#7888FF]/20 animate-pulse-opacity"
                    style={{ animationDelay: `${cell.delay}s` }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Central content */}
          <div className="relative z-10 container mx-auto px-8 text-center max-w-4xl">
            <h1 className="text-[#F5F5F5] text-5xl md:text-7xl font-light tracking-wider mb-8 leading-tight">
              NOT JUST <span className="text-[#7888FF]">CLOTHING</span>
              <br />A TECHNO<span className="text-[#7888FF]">-</span>PHILOSOPHY
            </h1>
            <div className="h-px w-24 bg-[#7888FF] mx-auto mb-8" />
            <p className="text-[#A0A0A0] text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              ZYBERAX exists at the intersection of minimalist aesthetics and technical innovation. 
              We craft apparel for those who seek simplicity without sacrificing function.
            </p>
            <button className="border border-[#333333] px-8 py-3 text-[#F5F5F5] text-sm font-mono tracking-wider hover:border-[#7888FF] transition-all duration-300">
              DISCOVER THE COLLECTION
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="text-[#A0A0A0] text-xs font-mono mb-2">SCROLL</p>
            <div className="w-px h-12 bg-gradient-to-b from-[#333333] to-transparent" />
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="min-h-screen flex items-center py-24 relative">
          <div className="absolute top-0 right-0 w-2/3 h-screen hidden lg:block">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-[#111111] opacity-40" />
              <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply"
                   style={{backgroundImage: "url('https://dummyimage.com/1200x800/111111/7888ff&text=ZYBERAX')"}} />
            </div>
          </div>

          <div className="container mx-auto px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h2 className="text-[#7888FF] font-mono text-sm mb-2">01 / MANIFESTO</h2>
                  <h3 className="text-[#F5F5F5] text-4xl font-light tracking-wider mb-8">
                    DESIGNED FOR THE<br />DIGITAL GENERATION
                  </h3>
                  <p className="text-[#A0A0A0] leading-relaxed max-w-lg">
                    We reject the disposable nature of contemporary fashion. Our designs emerge from a 
                    careful consideration of form, function, and longevity. Each garment is engineered 
                    to move seamlessly between digital and physical spaces, embodying a new aesthetic 
                    for those who live in both worlds.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-[#7888FF] text-4xl font-light mb-2">95<span className="text-xl">%</span></p>
                    <p className="text-[#F5F5F5] text-sm font-mono">TECHNICAL FABRICS</p>
                  </div>
                  <div>
                    <p className="text-[#7888FF] text-4xl font-light mb-2">27</p>
                    <p className="text-[#F5F5F5] text-sm font-mono">DESIGN ITERATIONS</p>
                  </div>
                  <div>
                    <p className="text-[#7888FF] text-4xl font-light mb-2">3<span className="text-xl">x</span></p>
                    <p className="text-[#F5F5F5] text-sm font-mono">DURABILITY FACTOR</p>
                  </div>
                  <div>
                    <p className="text-[#7888FF] text-4xl font-light mb-2">8</p>
                    <p className="text-[#F5F5F5] text-sm font-mono">CORE PRINCIPLES</p>
                  </div>
                </div>
              </div>

              <div className="lg:pl-16 space-y-8">
                <p className="text-[#F5F5F5] text-lg font-light border-l-2 border-[#7888FF] pl-4">
                  "We don't follow trends; we create systems that adapt to the evolving needs of our community."
                </p>
                
                <p className="text-[#A0A0A0] leading-relaxed">
                  Each ZYBERAX piece is a statement of intent: to reduce the noise, to focus on what matters.
                  In a world of excess, we choose restraint. In a culture of disposability, we choose
                  permanence. Our garments are built on a foundation of technical excellence and
                  aesthetic minimalism.
                </p>
                
                <p className="text-[#A0A0A0] leading-relaxed">
                  We believe clothing should adapt to your environment, whether you're navigating urban landscapes
                  or digital spaces. Our designs incorporate responsive materials and adaptable constructions that
                  move with you through every context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-8">
            <h2 className="text-[#7888FF] font-mono text-sm mb-2">02 / EVOLUTION</h2>
            <h3 className="text-[#F5F5F5] text-4xl font-light tracking-wider mb-16">
              OUR TIMELINE
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-px bg-[#333333] transform md:translate-x-[-0.5px]" />

              {/* Timeline events */}
              <div className="space-y-24">
                {timeline.map((event, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Circle on timeline */}
                    <div className="absolute left-[15px] md:left-1/2 w-[11px] h-[11px] rounded-full bg-[#7888FF] transform translate-x-[-5px] md:translate-x-[-5.5px]" />
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                      <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        <div className="inline-block px-4 py-1 bg-[#111111] text-[#7888FF] font-mono text-xs mb-2">
                          {event.year}
                        </div>
                        <h4 className="text-[#F5F5F5] text-xl font-light mb-2">
                          {event.title}
                        </h4>
                        <p className="text-[#A0A0A0] text-sm max-w-md">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-[#7888FF] font-mono text-sm mb-2">03 / PHILOSOPHY</h2>
            <h3 className="text-[#F5F5F5] text-4xl font-light tracking-wider mb-16">
              CORE VALUES
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {values.map((value) => (
                <div key={value.id} className="border-t border-[#333333] pt-6">
                  <p className="text-[#A0A0A0] font-mono text-xs mb-3">{value.id}</p>
                  <h4 className="text-[#F5F5F5] text-xl font-light mb-3">{value.title}</h4>
                  <p className="text-[#A0A0A0]">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="md:col-span-2">
                <h4 className="text-[#F5F5F5] text-2xl font-light mb-6">
                  THE FUTURE IS<br />BOTH DIGITAL AND PHYSICAL
                </h4>
                <p className="text-[#A0A0A0] leading-relaxed mb-8">
                  As we navigate an increasingly complex relationship between digital and physical existence,
                  ZYBERAX creates garments that adapt to both realms. We embrace the tension between
                  technological advancement and human experience, designing for a future where these
                  boundaries continue to blur.
                </p>
                <Link href="/shop" className="text-[#7888FF] font-mono text-sm border-b border-[#7888FF] pb-1 inline-block hover:text-white transition-colors duration-300">
                  EXPLORE THE COLLECTION
                </Link>
              </div>
              <div className="flex items-end">
                <div 
                  className="h-72 w-full bg-[#111111] relative overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#7888FF] opacity-40">
                      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated elements */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4/5 h-4/5 pointer-events-none opacity-5">
            <div className="absolute w-full h-full border border-[#7888FF] rounded-full animate-spin-slow"></div>
            <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#7888FF] rounded-full animate-reverse-spin-slow"></div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-8">
            <h2 className="text-[#7888FF] font-mono text-sm mb-2">04 / CREATORS</h2>
            <h3 className="text-[#F5F5F5] text-4xl font-light tracking-wider mb-16">
              THE TEAM
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="aspect-square bg-[#111111] overflow-hidden mb-6 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="text-[#F5F5F5] text-lg font-light mb-1">{member.name}</h4>
                  <p className="text-[#A0A0A0] text-xs font-mono">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 text-center max-w-2xl mx-auto">
              <p className="text-[#F5F5F5] text-lg font-light mb-8">
                Interested in joining our team of designers, developers, and innovators?
              </p>
              <Link 
                href="/contact" 
                className="inline-block border border-[#333333] px-8 py-3 text-[#F5F5F5] text-sm font-mono tracking-wider hover:border-[#7888FF] transition-all duration-300"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-[#222222]">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[#F5F5F5] text-2xl font-bold tracking-widest mb-6 md:mb-0">
                ZYBERAX
              </div>
              <div className="flex space-x-8">
                <Link href="/" className="text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors duration-300">HOME</Link>
                <Link href="/shop" className="text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors duration-300">SHOP</Link>
                <Link href="/about" className="text-[#F5F5F5]">ABOUT</Link>
                <Link href="/contact" className="text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors duration-300">CONTACT</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default AboutPage; 