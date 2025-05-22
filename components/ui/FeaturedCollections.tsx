"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FeaturedCollections() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    // Auto-rotate collections
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % collections.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const collections = [
    {
      id: 1,
      name: "NEO-URBAN",
      description: "Street-ready apparel with integrated tech elements",
      imageUrl: "/neo-urban.jpg",
      accentColor: "#7888FF",
    },
    {
      id: 2,
      name: "QUANTUM FLUX",
      description: "Adaptive fabrics that respond to environmental changes",
      imageUrl: "/quantum-flux.jpg",
      accentColor: "#FF7878",
    },
    {
      id: 3,
      name: "GHOST PROTOCOL",
      description: "Stealth-inspired designs with minimalist aesthetic",
      imageUrl: "/ghost-protocol.jpg",
      accentColor: "#78FFD6",
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#080808] py-24 overflow-hidden">
      {/* Background grid and effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(to right, #4A5568 1px, transparent 1px), linear-gradient(to bottom, #4A5568 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}>
        </div>
      </div>
      
      {/* Ambient light effects */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#000000] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#000000] to-transparent z-10"></div>
      
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#7888FF]/10 blur-[150px] animate-pulse-slow opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-[#FF7878]/10 blur-[180px] animate-pulse-slow opacity-50" style={{ animationDelay: '2s' }}></div>

      {/* Section content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div 
          className="mb-24 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#7888FF]"></div>
            <div className="text-[#7888FF] text-sm tracking-widest">FEATURED</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] mb-6">
            <span className="block">Exclusive</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7888FF] via-[#DCDEFF] to-[#7888FF]">Collections</span>
          </h2>
          
          <p className="text-[#A0A0A0] md:text-lg max-w-lg">
            Limited edition releases featuring our most advanced materials and designs, engineered for the modern urban explorer.
          </p>
        </div>
        
        {/* Collection display */}
        <div className="relative min-h-[500px]">
          {/* Collection tabs */}
          <div 
            className="flex flex-wrap gap-4 md:gap-8 mb-12 opacity-0 transition-opacity duration-1000 ease-out"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            {collections.map((collection, index) => (
              <button 
                key={collection.id}
                onClick={() => setActiveCollection(index)}
                className={`relative px-5 py-3 border text-sm md:text-base transition-all duration-300 ${
                  activeCollection === index 
                    ? `border-[${collection.accentColor}] text-[${collection.accentColor}]` 
                    : 'border-[#333333] text-[#A0A0A0] hover:border-[#555555]'
                }`}
              >
                <span>{collection.name}</span>
                {activeCollection === index && (
                  <span 
                    className="absolute -bottom-[1px] left-0 w-full h-[1px] animate-width-pulse"
                    style={{ backgroundColor: collection.accentColor }}
                  ></span>
                )}
              </button>
            ))}
          </div>
          
          {/* Collection cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className={`group relative border border-[#333333] overflow-hidden transition-all duration-700 transform ${
                  activeCollection === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10 md:opacity-30 md:translate-y-0 pointer-events-none md:pointer-events-auto'
                }`}
                style={{ 
                  transitionDelay: `${index * 100 + 400}ms`,
                  height: '450px'
                }}
              >
                {/* Collection image - would be replaced with actual images */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#222222] overflow-hidden">
                  {/* Placeholder with gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ 
                      backgroundColor: index === 0 ? '#7888FF' : index === 1 ? '#FF7878' : '#78FFD6',
                      backgroundImage: 'radial-gradient(circle at center, transparent 30%, #000000 100%)',
                    }}
                  ></div>
                  
                  {/* Tech overlay */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full opacity-10" 
                      style={{
                        backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}>
                    </div>
                  </div>
                </div>
                
                {/* Collection info */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <div 
                    className="w-12 h-[1px] mb-4 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: collection.accentColor }}
                  ></div>
                  
                  <h3 className="text-[#F5F5F5] text-xl md:text-2xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-[#A0A0A0] text-sm mb-6">{collection.description}</p>
                  
                  <Link href={`/collections/${collection.id}`}>
                    <button 
                      className="border border-[#333333] text-[#F5F5F5] px-6 py-2 text-sm hover:border-[#7888FF] transition-all duration-300 relative overflow-hidden group"
                    >
                      <span>Explore Collection</span>
                      <span 
                        className="absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                        style={{ backgroundColor: collection.accentColor }}
                      ></span>
                    </button>
                  </Link>
                </div>
                
                {/* Corner tech element */}
                <div className="absolute top-4 right-4 border border-[#333333] p-2 transition-all duration-300 group-hover:border-[#7888FF]">
                  <div 
                    className="text-[10px] font-mono whitespace-nowrap transition-colors duration-300 group-hover:text-[#7888FF]"
                    style={{ color: collection.accentColor }}
                  >
                    ID:{collection.id.toString().padStart(4, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Vertical line with accent color */}
          <div 
            className="absolute -top-24 -bottom-12 left-0 md:left-[calc(33.33%-2px)] w-[1px] opacity-0 transition-all duration-1000 ease-out"
            style={{ 
              opacity: isVisible ? 0.3 : 0, 
              transitionDelay: '500ms',
              background: 'linear-gradient(to bottom, transparent, #7888FF 20%, #7888FF 80%, transparent)'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
} 