"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";

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
    name: "Shooting Stars+",
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

interface ProductPageProps {
  params: Promise<{ product: string }>;
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [isLoaded, setIsLoaded] = useState(false);
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

  return (
    <div className="bg-[#080808] min-h-screen">
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

      <section className="text-[#A0A0A0] body-font overflow-hidden pt-24">
        <div className="container px-6 md:px-12 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:h-auto h-64 relative group">
              <img
                alt={product.name}
                className="object-cover object-center w-full h-full rounded transition-opacity duration-300 group-hover:opacity-80"
                src={product.image}
              />
              <div className="absolute inset-0 bg-[#7888FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm font-mono text-[#A0A0A0] tracking-widest">
                {product.brand}
              </h2>
              <h1 className="text-[#F5F5F5] text-3xl title-font font-medium mb-1 tracking-widest">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill={i < product.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-[#7888FF]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <span className="text-[#A0A0A0] ml-3 font-mono">
                    {product.reviews} Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-[#333333] space-x-2">
                  <a className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors duration-300">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors duration-300">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-[#A0A0A0] hover:text-[#7888FF] transition-colors duration-300">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-[#A0A0A0] font-mono">
                {product.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-[#333333] mb-5">
                <div className="flex items-center">
                  <span className="mr-3 text-[#F5F5F5] font-mono">Color</span>
                  <button className="border-2 border-[#333333] rounded-full w-6 h-6 focus:outline-none bg-white"></button>
                  <button className="border-2 border-[#333333] ml-1 bg-[#111111] rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-[#333333] ml-1 bg-[#7888FF] rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3 text-[#F5F5F5] font-mono">Size</span>
                  <div className="relative">
                    <select className="rounded border border-[#333333] bg-[#111111] text-[#F5F5F5] py-2 focus:outline-none focus:ring-2 focus:ring-[#7888FF] focus:border-[#7888FF] text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-[#A0A0A0] pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-[#F5F5F5]">
                  ${product.price.toFixed(2)}
                </span>
                <button className="flex ml-auto text-[#F5F5F5] bg-[#7888FF] border-0 py-2 px-6 focus:outline-none hover:bg-[#6b79e6] rounded transition-colors duration-300 font-mono tracking-wider">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-[#111111] p-0 border-0 inline-flex items-center justify-center text-[#A0A0A0] hover:text-[#7888FF] ml-4 transition-colors duration-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
