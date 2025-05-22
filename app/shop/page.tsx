"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  brand: string;
  rating: number;
  reviews: number;
}

// Updated product data to reflect clothing items
const products: Product[] = [
  {
    id: 1,
    name: "ECLIPSE HOODIE",
    price: 89.0,
    category: "HOODIES",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Minimalist design with technical fabric and reflective details.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 12,
  },
  {
    id: 2,
    name: "NEXUS TEE",
    price: 45.0,
    category: "T-SHIRTS",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Premium cotton blend with avant-garde graphic print.",
    brand: "ZYBERAX",
    rating: 5,
    reviews: 18,
  },
  {
    id: 3,
    name: "BINARY CARGO",
    price: 110.0,
    category: "PANTS",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Tactical-inspired cargo pants with minimal pocket design.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 6,
  },
  {
    id: 4,
    name: "VOID JACKET",
    price: 175.0,
    category: "OUTERWEAR",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Weatherproof technical jacket with minimalist aesthetic.",
    brand: "ZYBERAX",
    rating: 5,
    reviews: 9,
  },
  {
    id: 5,
    name: "SPECTRUM CREWNECK",
    price: 75.0,
    category: "SWEATERS",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Heavyweight cotton crewneck with understated design elements.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 7,
  },
  {
    id: 6,
    name: "CIRCUIT SHORTS",
    price: 65.0,
    category: "SHORTS",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Technical fabric shorts with hidden pocket system.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 5,
  },
  {
    id: 7,
    name: "NEURAL CAP",
    price: 35.0,
    category: "ACCESSORIES",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Minimalist cap with embroidered logo and adjustable fit.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 11,
  },
  {
    id: 8,
    name: "PROXY LONG SLEEVE",
    price: 55.0,
    category: "TOPS",
    image: "https://dummyimage.com/420x520/111111/7888ff&text=ZYBERAX",
    description: "Longsleeve tee with extended cuffs and subtle graphic elements.",
    brand: "ZYBERAX", 
    rating: 4,
    reviews: 8,
  },
];

// Filter categories for the shop
const categories = ["ALL", ...Array.from(new Set(products.map(p => p.category)))];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Generate slug from product name
  const slug = product.name.toLowerCase().replace(/\s+/g, "-");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${slug}`}>
        <div className="h-full flex flex-col">
          {/* Product image container with aspect ratio */}
          <div className="relative overflow-hidden bg-[#111111] mb-3">
            {/* Top label - New Release */}
            {product.id < 3 && (
              <div className="absolute top-3 left-3 z-10">
                <div className="bg-[#7888FF] px-2 py-1">
                  <span className="text-[10px] font-mono text-black font-medium tracking-wider">NEW</span>
                </div>
              </div>
            )}
            
            {/* Product image */}
            <div 
              className={`aspect-[3/4] overflow-hidden transform transition-all duration-700 ${isHovered ? 'scale-[1.03]' : 'scale-100'}`}
            >
              <img
                alt={product.name}
                className="object-cover object-center w-full h-full opacity-95 transition-all duration-700"
                src={product.image}
              />
              
              {/* Gradient overlay on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              ></div>
            </div>
            
            {/* Quick actions */}
            <div 
              className={`absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <div className="flex space-x-3">
                <button 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="white" fillOpacity="0.8"/>
                  </svg>
                </button>
                <button 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 8.25L18.42 11.25L16.8 8.25H8.4L6.78 11.25L4.2 8.25H3L6.3 12.75L3 17.25H4.2L6.78 14.25L8.4 17.25H16.8L18.42 14.25L21 17.25H22.2L18.9 12.75L22.2 8.25H21Z" fill="white" fillOpacity="0.8"/>
                  </svg>
                </button>
              </div>
              <button 
                className="h-10 px-4 bg-[#7888FF] flex items-center justify-center transition-all duration-300 hover:bg-[#6b79e6]"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-xs font-mono text-black font-semibold">ADD</span>
              </button>
            </div>
          </div>
          
          {/* Product info */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[#A0A0A0] text-[10px] tracking-widest font-mono mb-1">
                {product.category}
              </h3>
              <h2 className="text-[#F5F5F5] text-sm font-medium tracking-wider leading-tight">
                {product.name}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-[#F5F5F5]">
                ${product.price.toFixed(0)}
              </p>
              {/* Star rating */}
              <div className="flex items-center mt-1 justify-end">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-[8px] ${i < product.rating ? 'text-[#7888FF]' : 'text-[#333333]'}`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-[8px] text-[#707070] ml-1">({product.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ShopPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory !== "ALL") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    let sorted = [...filteredProducts];
    
    switch(sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // featured - use default order
        sorted = [...filteredProducts];
    }
    
    setFilteredProducts(sorted);
  }, [sortBy]);

  return (
    <div className="bg-[#080808] min-h-screen pb-20">
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
            LOADING COLLECTION
          </div>
        </div>
      </div>

      <section className="pt-12 text-[#A0A0A0] body-font">
        {/* Collection hero section */}
        <div className="w-full bg-[#0a0a0a] mb-12">
          <div className="container mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-4xl font-light text-[#F5F5F5] tracking-widest mb-4">
              <span className="text-[#7888FF]">ZYBERAX</span> COLLECTION
            </h1>
            <div className="w-20 h-px bg-[#7888FF] mx-auto mb-6"></div>
            <p className="text-sm text-[#A0A0A0] max-w-xl text-center font-light">
              Minimalist technical apparel with a futuristic aesthetic. Engineered with precision and designed for versatility.
            </p>
          </div>
        </div>
        
        <div className="container px-6 md:px-12 mx-auto">
          {/* Collection toolbar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b border-[#1a1a1a]">
            <div className="flex items-center mb-6 md:mb-0">
              <span className="text-xs font-mono text-[#A0A0A0] mr-4">{filteredProducts.length} PRODUCTS</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setLayout('grid')} 
                  className={`p-2 ${layout === 'grid' ? 'text-[#7888FF]' : 'text-[#666666]'}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="7" height="7" fill="currentColor"/>
                    <rect x="14" y="3" width="7" height="7" fill="currentColor"/>
                    <rect x="3" y="14" width="7" height="7" fill="currentColor"/>
                    <rect x="14" y="14" width="7" height="7" fill="currentColor"/>
                  </svg>
                </button>
                <button 
                  onClick={() => setLayout('list')} 
                  className={`p-2 ${layout === 'list' ? 'text-[#7888FF]' : 'text-[#666666]'}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="5" width="18" height="2" fill="currentColor"/>
                    <rect x="3" y="11" width="18" height="2" fill="currentColor"/>
                    <rect x="3" y="17" width="18" height="2" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              {/* Sort dropdown */}
              <div className="relative">
                <select 
                  className="bg-[#111111] border border-[#222222] text-[#A0A0A0] text-xs font-mono py-2 px-4 pr-8 appearance-none w-40"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">FEATURED</option>
                  <option value="price-asc">PRICE: LOW TO HIGH</option>
                  <option value="price-desc">PRICE: HIGH TO LOW</option>
                  <option value="rating">TOP RATED</option>
                  <option value="name">NAME</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#A0A0A0]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              {/* Filter button */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`text-xs font-mono py-2 px-4 border transition-all duration-300 ${showFilters ? 'border-[#7888FF] text-[#7888FF]' : 'border-[#222222] text-[#A0A0A0] hover:border-[#7888FF]/50'}`}
              >
                FILTER {showFilters ? "−" : "+"}
              </button>
            </div>
          </div>
          
          {/* Filter section */}
          <div className={`overflow-hidden transition-all duration-500 mb-10 ${showFilters ? 'max-h-48' : 'max-h-0'}`}>
            <div className="py-6 border-b border-[#1a1a1a]">
              <div className="mb-6">
                <h3 className="text-xs font-mono text-[#F5F5F5] mb-4">SEARCH</h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#111111] border border-[#222222] py-2 px-4 text-white text-sm focus:border-[#7888FF] outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="bg-[#222222] text-[#A0A0A0] px-3 hover:bg-[#333333]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <h3 className="text-xs font-mono text-[#F5F5F5] mb-4">CATEGORIES</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-xs font-mono transition-all duration-300 ${
                      selectedCategory === category 
                        ? 'bg-[#7888FF] text-black' 
                        : 'bg-[#111111] text-[#A0A0A0] hover:bg-[#1a1a1a]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product grid layout */}
          {layout === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, i) => (
                <div 
                  key={product.id} 
                  className="opacity-100"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
          
          {/* Product list layout */}
          {layout === 'list' && (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="border-b border-[#1a1a1a] pb-6">
                  <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 mb-4 md:mb-0 md:pr-8">
                      <div className="aspect-[3/4] md:aspect-[4/5] bg-[#111111] overflow-hidden">
                        <img
                          alt={product.name}
                          className="object-cover object-center w-full h-full"
                          src={product.image}
                        />
                      </div>
                    </div>
                    <div className="md:w-3/4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[#A0A0A0] text-xs tracking-widest font-mono mb-1">
                          {product.category}
                        </h3>
                        <h2 className="text-[#F5F5F5] text-xl font-medium tracking-wide mb-3">
                          {product.name}
                        </h2>
                        <p className="text-[#A0A0A0] text-sm mb-4 max-w-2xl">{product.description}</p>
                        
                        {/* Star rating */}
                        <div className="flex items-center mb-6">
                          {[...Array(5)].map((_, i) => (
                            <span 
                              key={i} 
                              className={`text-sm ${i < product.rating ? 'text-[#7888FF]' : 'text-[#333333]'}`}
                            >
                              ★
                            </span>
                          ))}
                          <span className="text-xs text-[#707070] ml-2">({product.reviews} reviews)</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-medium text-[#F5F5F5]">
                          ${product.price.toFixed(0)}
                        </p>
                        <button 
                          className="h-10 px-6 bg-[#7888FF] text-xs font-mono text-black font-semibold transition-all duration-300 hover:bg-[#6b79e6]"
                          onClick={(e) => e.preventDefault()}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          
          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="py-32 flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center border border-[#222222] rounded-full mb-4">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-[#7888FF] font-mono text-sm mb-2">NO PRODUCTS FOUND</p>
              <p className="text-[#A0A0A0] text-xs">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('ALL')}
                className="mt-6 px-6 py-2 text-xs font-mono border border-[#222222] text-[#A0A0A0] hover:border-[#7888FF] transition-all duration-300"
              >
                VIEW ALL PRODUCTS
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
