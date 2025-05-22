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

const products: Product[] = [
  {
    id: 1,
    name: "The Catalyzer",
    price: 16.0,
    category: "Electronics",
    image: "https://dummyimage.com/420x260",
    description:
      "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 4,
  },
  {
    id: 2,
    name: "Shooting Stars",
    price: 21.15,
    category: "Accessories",
    image: "https://dummyimage.com/421x261",
    description: "High-quality accessory with a futuristic design.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 10,
  },
  {
    id: 3,
    name: "Neptune",
    price: 12.0,
    category: "Gadgets",
    image: "https://dummyimage.com/422x262",
    description: "Compact gadget with cutting-edge technology.",
    brand: "ZYBERAX",
    rating: 3,
    reviews: 6,
  },
  {
    id: 4,
    name: "The 400 Blows",
    price: 18.4,
    category: "Tech",
    image: "https://dummyimage.com/423x263",
    description: "Advanced tech product for enthusiasts.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 8,
  },
  {
    id: 5,
    name: "The Catalyzer Pro",
    price: 16.0,
    category: "Electronics",
    image: "https://dummyimage.com/424x264",
    description: "Enhanced version of The Catalyzer.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 5,
  },
  {
    id: 6,
    name: "Shooting Stars",
    price: 21.15,
    category: "Accessories",
    image: "https://dummyimage.com/425x265",
    description: "Premium accessory with a sleek design.",
    brand: "ZYBERAX",
    rating: 5,
    reviews: 12,
  },
  {
    id: 7,
    name: "Neptune X",
    price: 12.0,
    category: "Gadgets",
    image: "https://dummyimage.com/427x267",
    description: "Next-generation gadget with improved functionality.",
    brand: "ZYBERAX",
    rating: 4,
    reviews: 7,
  },
  {
    id: 8,
    name: "The 400 Blows Elite",
    price: 18.4,
    category: "Tech",
    image: "https://dummyimage.com/428x268",
    description: "Elite tech product for high-performance needs.",
    brand: "ZYBERAX",
    rating: 5,
    reviews: 9,
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Generate slug from product name
  const slug = product.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full transition-all duration-300 hover:scale-105 group">
      <Link href={`/product/${slug}`}>
        <div className="block relative h-48 rounded overflow-hidden shadow-lg bg-[#111111]">
          <img
            alt={product.name}
            className="object-cover object-center w-full h-full block transition-opacity duration-300 group-hover:opacity-80"
            src={product.image}
          />
          <div className="absolute inset-0 bg-[#7888FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>
      <div className="mt-4">
        <h3 className="text-[#A0A0A0] text-xs tracking-widest font-mono mb-1">
          {product.category}
        </h3>
        <h2 className="text-[#F5F5F5] title-font text-lg font-medium">
          {product.name}
        </h2>
        <p className="mt-1 font-semibold text-[#F5F5F5]">
          ${product.price.toFixed(2)}
        </p>
        <button
          className="mt-2 text-[#F5F5F5] bg-[#7888FF] px-4 py-1 rounded hover:bg-[#6b79e6] transition-colors duration-300 text-sm font-mono tracking-wider"
          onClick={(e) => e.stopPropagation()} // Prevent Link navigation on button click
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ShopPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
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
            LOADING PRODUCTS
          </div>
        </div>
      </div>

      <section className="pt-24 text-[#A0A0A0] body-font">
        <div className="container px-6 md:px-12 py-24 mx-auto">
          <h1 className="text-3xl font-bold text-[#F5F5F5] mb-12 text-center tracking-widest">
            OUR PRODUCTS
          </h1>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
