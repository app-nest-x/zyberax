"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
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

// Updated product data to match our shop
const products: Product[] = [
  {
    id: 1,
    name: "ECLIPSE HOODIE",
    price: 89.0,
    category: "HOODIES",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Minimalist design with technical fabric and reflective details. Features a relaxed fit with kangaroo pocket and adjustable drawcord hood. Made from premium cotton blend with moisture-wicking properties.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 12,
  },
  {
    id: 2,
    name: "NEXUS TEE",
    price: 45.0,
    category: "T-SHIRTS",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Premium cotton blend with avant-garde graphic print. Features a relaxed fit with ribbed collar and clean finishes. Designed for everyday wear with a distinctive aesthetic.",
    brand: "ZYBERAX",
    rating: 5,
    reviews: 18,
  },
  {
    id: 3,
    name: "BINARY CARGO",
    price: 110.0,
    category: "PANTS",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Tactical-inspired cargo pants with minimal pocket design. Features a tapered fit with articulated knees and adjustable ankle cuffs. Made from durable ripstop fabric with water-repellent coating.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 6,
  },
  {
    id: 4,
    name: "VOID JACKET",
    price: 175.0,
    category: "OUTERWEAR",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Weatherproof technical jacket with minimalist aesthetic. Features a streamlined silhouette with hidden pockets and storm cuffs. Made from 3-layer fabric with taped seams for ultimate protection against the elements.",
    brand: "ZYBERAX",
    rating: 5,
    reviews: 9,
  },
  {
    id: 5,
    name: "SPECTRUM CREWNECK",
    price: 75.0,
    category: "SWEATERS",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Heavyweight cotton crewneck with understated design elements. Features a classic fit with ribbed cuffs and hem. Perfect for layering or as a standalone piece for year-round comfort.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 7,
  },
  {
    id: 6,
    name: "CIRCUIT SHORTS",
    price: 65.0,
    category: "SHORTS",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Technical fabric shorts with hidden pocket system. Features a relaxed fit with elasticated waistband and quick-dry technology. Designed for versatility and maximum movement.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 5,
  },
  {
    id: 7,
    name: "NEURAL CAP",
    price: 35.0,
    category: "ACCESSORIES",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Minimalist cap with embroidered logo and adjustable fit. Features a six-panel construction with ventilation eyelets. Made from premium cotton twill for lasting comfort.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 11,
  },
  {
    id: 8,
    name: "PROXY LONG SLEEVE",
    price: 55.0,
    category: "TOPS",
    image: "https://dummyimage.com/800x1000/111111/7888ff&text=ZYBERAX",
    description: "Longsleeve tee with extended cuffs and subtle graphic elements. Features a regular fit with premium cotton construction. Versatile piece designed for layering or standalone wear.",
    brand: "ZYBERAX", 
    rating: 4,
    reviews: 8,
  },
];

interface ProductPageProps {
  params: Promise<{ product: string }>;
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = ["#000000", "#FFFFFF", "#7888FF"];

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(colors[2]);
  const [quantity, setQuantity] = useState(1);
  const resolvedParams = React.use(params); // Unwrap the params Promise

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === resolvedParams.product
  );

  if (!product) {
    notFound();
    return null;
  }

  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const incrementQuantity = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

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
            LOADING PRODUCT
          </div>
        </div>
      </div>

      <div className="py-12 md:pt-24 md:pb-32">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 md:px-12 mb-10">
          <div className="flex items-center text-xs text-[#707070] font-mono">
            <Link href="/" className="hover:text-[#A0A0A0] transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-[#A0A0A0] transition-colors">SHOP</Link>
            <span className="mx-2">/</span>
            <Link href={`/shop?category=${product.category}`} className="hover:text-[#A0A0A0] transition-colors">{product.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#A0A0A0]">{product.name}</span>
          </div>
        </div>

        {/* Product details */}
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Product images */}
            <div className="space-y-6">
              <div className="aspect-[4/5] bg-[#111111] relative group overflow-hidden">
                <img
                  alt={product.name}
                  className="object-cover object-center w-full h-full"
                  src={product.image}
                />
                {product.id < 3 && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-[#7888FF] px-3 py-1">
                      <span className="text-xs font-mono text-black font-medium">NEW</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Thumbnail gallery (dummy for now) */}
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`aspect-square bg-[#111111] ${i === 0 ? 'ring-2 ring-[#7888FF]' : ''}`}>
                    <img
                      alt={`Thumbnail ${i+1}`}
                      className="object-cover object-center w-full h-full opacity-90"
                      src={product.image}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[#A0A0A0] text-xs tracking-widest font-mono">
                    {product.category}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-sm ${i < product.rating ? 'text-[#7888FF]' : 'text-[#333333]'}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-[10px] text-[#707070] ml-2">({product.reviews})</span>
                  </div>
                </div>
                
                <h1 className="text-[#F5F5F5] text-2xl md:text-3xl font-light tracking-wider mb-4">
                  {product.name}
                </h1>
                
                <p className="text-xl font-medium text-[#F5F5F5] mb-6">
                  ${product.price.toFixed(0)}
                </p>
                
                <div className="h-px bg-[#1a1a1a] w-full my-6"></div>
                
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Color selector */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono text-[#F5F5F5] mb-3">COLOR</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        className={`w-8 h-8 rounded-full transition-all duration-300 ${
                          selectedColor === color ? 'ring-2 ring-offset-2 ring-offset-[#080808] ring-[#7888FF]' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Size selector */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-mono text-[#F5F5F5]">SIZE</h3>
                    <button className="text-[10px] text-[#A0A0A0] underline hover:text-[#7888FF] transition-colors">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`min-w-[40px] h-10 px-2 text-xs font-mono transition-all duration-300 ${
                          selectedSize === size 
                            ? 'bg-[#7888FF] text-black' 
                            : 'border border-[#333333] text-[#A0A0A0] hover:border-[#7888FF]'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity selector */}
                <div className="mb-8">
                  <h3 className="text-xs font-mono text-[#F5F5F5] mb-3">QUANTITY</h3>
                  <div className="flex items-center">
                    <button 
                      className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#A0A0A0] hover:border-[#7888FF] transition-all duration-300"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center border-t border-b border-[#333333] text-[#F5F5F5]">
                      {quantity}
                    </div>
                    <button 
                      className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#A0A0A0] hover:border-[#7888FF] transition-all duration-300"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col space-y-4">
                  <button className="h-12 bg-[#7888FF] text-black font-mono text-sm tracking-wider flex items-center justify-center hover:bg-[#6b79e6] transition-all duration-300">
                    ADD TO CART
                  </button>
                  <button className="h-12 border border-[#333333] text-[#F5F5F5] font-mono text-sm tracking-wider flex items-center justify-center hover:border-[#7888FF] transition-all duration-300">
                    SAVE TO WISHLIST
                  </button>
                </div>
                
                {/* Product info tabs */}
                <div className="mt-10">
                  <div className="border-t border-b border-[#1a1a1a] py-4 px-1">
                    <div className="flex items-center justify-between cursor-pointer">
                      <h3 className="text-xs font-mono text-[#F5F5F5]">DETAILS & CARE</h3>
                      <span className="text-[#A0A0A0]">+</span>
                    </div>
                  </div>
                  <div className="border-b border-[#1a1a1a] py-4 px-1">
                    <div className="flex items-center justify-between cursor-pointer">
                      <h3 className="text-xs font-mono text-[#F5F5F5]">SHIPPING & RETURNS</h3>
                      <span className="text-[#A0A0A0]">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="container mx-auto px-6 md:px-12 mt-24">
            <h2 className="text-xl text-[#F5F5F5] tracking-wider mb-8">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/product/${relatedProduct.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-[#111111] mb-4 overflow-hidden">
                    <img
                      alt={relatedProduct.name}
                      className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
                      src={relatedProduct.image}
                    />
                  </div>
                  <h3 className="text-[#A0A0A0] text-[10px] tracking-widest font-mono mb-1">
                    {relatedProduct.category}
                  </h3>
                  <div className="flex items-center justify-between">
                    <h2 className="text-[#F5F5F5] text-sm tracking-wider">
                      {relatedProduct.name}
                    </h2>
                    <p className="text-[#F5F5F5] text-sm">
                      ${relatedProduct.price.toFixed(0)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
