"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock login state
  const [userName, setUserName] = useState("User"); // Mock user name
  const [cartCount, setCartCount] = useState(3); // Mock cart items
  const [wishlistCount, setWishlistCount] = useState(2); // Mock wishlist items

  useEffect(() => {
    // Animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Scroll handler
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-6 md:px-16 py-6 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md border-b border-[#333333]"
            : "bg-transparent"
        }`}
      >
        <div
          className="flex justify-between items-center opacity-0 transition-all duration-600 ease-out"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <Link href="/">
            <div className="text-[#F5F5F5] font-bold text-lg tracking-[0.25em] uppercase animate-pulse-glow">
              ZYBERAX
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10 text-[#A0A0A0] text-sm tracking-widest">
            <Link
              href="/shop"
              className="hover:text-[#7888FF] transition-colors duration-300 relative group"
            >
              SHOP
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/collections"
              className="hover:text-[#7888FF] transition-colors duration-300 relative group"
            >
              COLLECTIONS
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="hover:text-[#7888FF] transition-colors duration-300 relative group"
            >
              ABOUT
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-[#F5F5F5] text-sm">
                  Hello, {userName}
                </span>
                <Link
                  href="/profile"
                  className="hover:text-[#7888FF] transition-colors duration-300 relative group"
                >
                  PROFILE
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  href="/login"
                  className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 border border-[#333333] px-4 py-1 rounded hover:border-[#7888FF]"
                >
                  LOGIN
                </Link>
                <Link
                  href="/signup"
                  className="text-[#F5F5F5] bg-[#7888FF] px-4 py-1 rounded hover:bg-[#6b79e6] transition-colors duration-300"
                >
                  SIGN UP
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#7888FF] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href="/wishlist"
              className="relative text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#7888FF] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <div className="md:hidden">
              <button
                className="text-[#F5F5F5] p-1.5 border border-[#333333] hover:border-[#7888FF] transition-colors duration-300 hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          clipPath: isMenuOpen
            ? "circle(150% at top right)"
            : "circle(0% at top right)",
        }}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center space-y-8 text-2xl font-light">
            {isLoggedIn && (
              <span className="text-[#F5F5F5] text-xl mb-4">
                Hello, {userName}
              </span>
            )}
            <Link
              href="/shop"
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              SHOP
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/collections"
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              COLLECTIONS
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/cart"
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              CART {cartCount > 0 && `(${cartCount})`}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/wishlist"
              className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              WISHLIST {wishlistCount > 0 && `(${wishlistCount})`}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {isLoggedIn ? (
              <Link
                href="/profile"
                className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                PROFILE
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOGIN
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/signup"
                  className="text-[#F5F5F5] hover:text-[#7888FF] transition-colors duration-300 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SIGN UP
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#7888FF] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu accents */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-[#7888FF]/30 animate-spin-slow opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-[#7888FF]/20 animate-reverse-spin-slow opacity-10"></div>
        </div>
      </div>
    </>
  );
}
