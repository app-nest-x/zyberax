"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Navigation from '../components/ui/Navigation';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="relative bg-[#080808] min-h-screen">
      {/* Loading screen */}
      <div 
        className="fixed inset-0 bg-black z-50 flex items-center justify-center pointer-events-none transition-opacity duration-1000"
        style={{ 
          opacity: isLoaded ? 0 : 1,
          visibility: isLoaded ? 'hidden' : 'visible' 
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-2xl text-[#7888FF] font-bold tracking-widest mb-4">ZYBERAX</div>
          <div className="w-40 h-1 bg-[#111111] overflow-hidden">
            <div className="h-full w-full bg-[#7888FF] animate-progress origin-left"></div>
          </div>
          <div className="text-xs text-[#A0A0A0] mt-4 font-mono">LAUNCHING EXPERIENCE</div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden flex items-center">
        {/* Hero background image */}
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-out',
          }}
        >
          <div 
            className="absolute inset-0 bg-black opacity-40 z-10"
          ></div>
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent z-20"
          ></div>
          <img 
            src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2076&auto=format&fit=crop"
            alt="ZYBERAX Fashion" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero content */}
        <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-12">
          <div 
            className="max-w-xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 1s ease-out, transform 1s ease-out',
              transitionDelay: '0.3s'
            }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              Minimalist <span className="text-[#7888FF]">Design</span><br />
              Premium <span className="text-[#7888FF]">Quality</span>
            </h1>
            <p className="text-[#E0E0E0] text-lg mb-10 max-w-md">
              ZYBERAX creates modern essentials with exceptional craftsmanship and timeless aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <button className="px-10 py-4 bg-white text-black font-light tracking-wider hover:bg-[#7888FF] transition-colors duration-300">
                  SHOP NOW
                </button>
              </Link>
              <Link href="/about">
                <button className="px-10 py-4 border border-white text-white font-light tracking-wider hover:border-[#7888FF] hover:text-[#7888FF] transition-colors duration-300">
                  OUR STORY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div 
            className="inline-block mx-auto mb-4 w-16 h-px bg-[#7888FF]"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease-out',
              transitionDelay: '0.5s'
            }}
          ></div>
          <h2 
            className="text-3xl md:text-4xl font-light text-white mb-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease-out',
              transitionDelay: '0.6s'
            }}
          >
            New Arrivals
          </h2>
          <p 
            className="text-[#A0A0A0] max-w-lg mx-auto"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 1s ease-out',
              transitionDelay: '0.7s'
            }}
          >
            Discover our latest collection featuring premium fabrics and distinctive design elements.
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
            transitionDelay: '0.8s'
          }}
        >
          {[
            {
              id: 1,
              name: "ECLIPSE HOODIE",
              price: 89.99,
              image: "https://dummyimage.com/600x800/111111/7888ff&text=HOODIE"
            },
            {
              id: 2,
              name: "VOID JACKET",
              price: 175.00,
              image: "https://dummyimage.com/600x800/111111/7888ff&text=JACKET"
            },
            {
              id: 3,
              name: "NEXUS TEE",
              price: 45.00,
              image: "https://dummyimage.com/600x800/111111/7888ff&text=TEE"
            },
            {
              id: 4,
              name: "BINARY CARGO",
              price: 110.00,
              image: "https://dummyimage.com/600x800/111111/7888ff&text=CARGO"
            }
          ].map(product => (
            <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`} key={product.id}>
              <div className="group">
                <div className="relative overflow-hidden bg-[#111111] mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-2 bg-white text-black text-sm">
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <h3 className="text-white font-light mb-1">{product.name}</h3>
                <p className="text-[#7888FF]">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/shop">
            <button 
              className="px-10 py-3 border border-[#333333] text-white font-light tracking-wider hover:border-[#7888FF] transition-colors duration-300"
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 1s ease-out',
                transitionDelay: '1s'
              }}
            >
              VIEW ALL PRODUCTS
            </button>
          </Link>
        </div>
      </section>
      
      {/* Brand values */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
                title: "CRAFTSMANSHIP",
                description: "Each ZYBERAX piece is meticulously crafted with attention to detail and premium materials."
              },
              {
                icon: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
                title: "SUSTAINABILITY",
                description: "We're committed to ethical production and environmentally responsible practices."
              },
              {
                icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
                title: "INNOVATION",
                description: "We blend contemporary aesthetics with forward-thinking design and premium materials."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                  transitionDelay: `${1 + (index * 0.2)}s`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#111111] mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-8 h-8 text-[#7888FF]"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-light mb-4">{value.title}</h3>
                <p className="text-[#A0A0A0]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Collection highlight */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              className="relative"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                transitionDelay: '1.4s'
              }}
            >
              <img 
                src="https://dummyimage.com/800x1000/111111/7888ff&text=COLLECTION" 
                alt="Fall Collection"
                className="w-full"
              />
              {/* Accent border */}
              <div className="absolute -top-4 -bottom-4 -left-4 border border-[#7888FF] -z-10"></div>
            </div>
            
            <div 
              className="md:pl-12"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                transitionDelay: '1.6s'
              }}
            >
              <div className="w-12 h-px bg-[#7888FF] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Fall Collection 2025</h2>
              <p className="text-[#A0A0A0] mb-8">
                Our latest collection features minimalist essentials with premium materials and thoughtful details. Clean silhouettes that transcend trends, designed for the modern individual who values quality and understated elegance.
              </p>
              <Link href="/shop">
                <button className="px-10 py-4 bg-[#7888FF] text-white font-light tracking-wider hover:bg-[#6b79e6] transition-colors duration-300">
                  EXPLORE COLLECTION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-[#0A0A0A]">
        <div 
          className="max-w-2xl mx-auto px-6 md:px-12 text-center"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
            transitionDelay: '1.8s'
          }}
        >
          <h2 className="text-3xl font-light text-white mb-4">Join the ZYBERAX community</h2>
          <p className="text-[#A0A0A0] mb-8">
            Subscribe to receive updates on new collections, exclusive offers, and style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-[#111111] border border-[#333333] py-3 px-4 text-white focus:border-[#7888FF] outline-none"
            />
            <button className="px-6 py-3 bg-white text-black font-light tracking-wider hover:bg-[#7888FF] hover:text-white transition-colors duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="bg-[#080808] border-t border-[#333333] py-12 text-[#A0A0A0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-[#F5F5F5] font-bold text-xl tracking-[0.25em] uppercase">ZYBERAX</div>
              <div className="text-sm">Crafting the future of fashion.</div>
            </div>
            
            <div className="flex gap-8 text-sm">
              <div className="flex flex-col gap-2">
                <div className="text-[#F5F5F5] mb-2">Explore</div>
                <Link href="/shop" className="hover:text-[#7888FF] transition-colors duration-300">Shop</Link>
                <Link href="/about" className="hover:text-[#7888FF] transition-colors duration-300">About</Link>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="text-[#F5F5F5] mb-2">Customer Care</div>
                <Link href="#" className="hover:text-[#7888FF] transition-colors duration-300">Contact</Link>
                <Link href="#" className="hover:text-[#7888FF] transition-colors duration-300">Shipping</Link>
                <Link href="#" className="hover:text-[#7888FF] transition-colors duration-300">Returns</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs">
              © 2023 Zyberax. All rights reserved. 
              <span className="mx-3 text-[#333333]">|</span>
              <Link href="/privacy" className="hover:text-[#7888FF] transition-colors duration-300">Privacy Policy</Link>
              <span className="mx-3 text-[#333333]">|</span>
              <Link href="/terms" className="hover:text-[#7888FF] transition-colors duration-300">Terms & Conditions</Link>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
