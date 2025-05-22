"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Mock wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "NEXUS FIELD JACKET",
    price: 249.99,
    image: "https://dummyimage.com/300x380/111111/7888ff&text=NEXUS",
    available: true
  },
  {
    id: 2,
    name: "VOID HOODIE",
    price: 129.99,
    image: "https://dummyimage.com/300x380/111111/7888ff&text=VOID",
    available: true
  },
  {
    id: 3,
    name: "AXIOM CARGO PANTS",
    price: 159.99,
    image: "https://dummyimage.com/300x380/111111/7888ff&text=AXIOM",
    available: false
  },
  {
    id: 4,
    name: "VECTOR LONG SLEEVE",
    price: 99.99,
    image: "https://dummyimage.com/300x380/111111/7888ff&text=VECTOR",
    available: true
  }
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [movingToCart, setMovingToCart] = useState<number | null>(null);
  
  // Remove item from wishlist
  const removeItem = (id: number) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Move item to cart
  const moveToCart = (id: number) => {
    setMovingToCart(id);
    
    // Simulate API call to add to cart
    setTimeout(() => {
      setMovingToCart(null);
      removeItem(id);
      // Here you would actually add the item to the cart
      console.log('Added item to cart:', id);
    }, 1000);
  };

  return (
    <div className="bg-[#080808] min-h-screen text-white">
      <div className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center">
            <div className="w-8 h-px bg-[#7888FF] mr-3"></div>
            <h2 className="text-xs font-mono text-[#A0A0A0]">SAVED ITEMS</h2>
          </div>
          <h1 className="text-3xl font-light tracking-wider mt-4 mb-6">
            WISHLIST_<span className="text-[#7888FF]">COLLECTION</span>
          </h1>
          
          {wishlistItems.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-[#A0A0A0] mb-8">Your wishlist is empty.</p>
              <Link 
                href="/shop" 
                className="inline-block border border-[#7888FF] px-6 py-3 text-[#F5F5F5] text-sm font-mono tracking-wider hover:bg-[#7888FF] hover:text-[#111111] transition-all duration-300"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <p className="text-sm text-[#A0A0A0]">
                  {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                </p>
                <button 
                  onClick={() => setWishlistItems([])}
                  className="text-sm text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors"
                >
                  Clear all
                </button>
              </div>
            
              {/* Grid layout for items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="bg-[#111111] group relative">
                    {/* Product Image */}
                    <Link href={`/shop/product/${item.id}`}>
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Availability badge */}
                        {!item.available && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <span className="text-white text-xs font-mono px-3 py-1 border border-[#444444]">
                              OUT OF STOCK
                            </span>
                          </div>
                        )}
                        
                        {/* Remove button */}
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeItem(item.id);
                          }}
                          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-[#F5F5F5] bg-black/50 hover:bg-[#7888FF]/80 transition-colors rounded-full"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </Link>
                    
                    {/* Product info */}
                    <div className="p-4 flex flex-col h-[120px]">
                      <Link href={`/shop/product/${item.id}`} className="block mb-1">
                        <h3 className="text-[#F5F5F5] font-light text-lg hover:text-[#7888FF] transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-[#7888FF]">${item.price.toFixed(2)}</p>
                      
                      <div className="mt-auto pt-4">
                        <button
                          onClick={() => item.available && moveToCart(item.id)}
                          disabled={!item.available || movingToCart === item.id}
                          className={`w-full text-center py-2 text-xs font-mono transition-colors ${
                            !item.available
                              ? 'bg-[#222222] text-[#A0A0A0] cursor-not-allowed'
                              : movingToCart === item.id
                                ? 'bg-[#333333] text-[#A0A0A0]'
                                : 'border border-[#7888FF] text-[#7888FF] hover:bg-[#7888FF] hover:text-[#111111]'
                          }`}
                        >
                          {movingToCart === item.id
                            ? 'ADDING...'
                            : !item.available
                              ? 'UNAVAILABLE'
                              : 'ADD TO CART'
                          }
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Empty slots to fill grid */}
              {wishlistItems.length % 4 !== 0 && wishlistItems.length < 8 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                  {Array.from({ length: 4 - (wishlistItems.length % 4) }).map((_, index) => (
                    <div key={index} className="aspect-[3/4] border border-dashed border-[#222222] flex items-center justify-center">
                      <Link href="/shop" className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors">
                        <div className="flex flex-col items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                          <span className="text-xs font-mono">Add more items</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        
        {/* Recommendations section - only show if wishlist has items */}
        {wishlistItems.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#222222]">
            <h2 className="text-xl font-light mb-8">
              YOU MIGHT ALSO LIKE
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 101,
                  name: "FLUX TECHNICAL VEST",
                  price: 119.99,
                  image: "https://dummyimage.com/300x380/111111/7888ff&text=FLUX"
                },
                {
                  id: 102,
                  name: "NEON TECHNICAL TEE",
                  price: 79.99,
                  image: "https://dummyimage.com/300x380/111111/7888ff&text=NEON"
                },
                {
                  id: 103,
                  name: "PULSE MINIMAL WATCH",
                  price: 189.99,
                  image: "https://dummyimage.com/300x380/111111/7888ff&text=PULSE"
                },
                {
                  id: 104,
                  name: "VERTEX TECHNICAL CAP",
                  price: 49.99,
                  image: "https://dummyimage.com/300x380/111111/7888ff&text=VERTEX"
                }
              ].map(recommendation => (
                <Link 
                  key={recommendation.id} 
                  href={`/shop/product/${recommendation.id}`}
                  className="bg-[#111111] group"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={recommendation.image} 
                      alt={recommendation.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#F5F5F5] font-light hover:text-[#7888FF] transition-colors">
                      {recommendation.name}
                    </h3>
                    <p className="text-[#7888FF] mt-1">${recommendation.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 