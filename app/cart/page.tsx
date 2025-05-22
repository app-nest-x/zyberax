"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "TECHSCALE JACKET",
    price: 179.99,
    image: "https://dummyimage.com/150x150/111111/7888ff&text=JACKET",
    color: "Black",
    size: "M",
    quantity: 1
  },
  {
    id: 2,
    name: "ORBITAL PANTS",
    price: 139.99,
    image: "https://dummyimage.com/150x150/111111/7888ff&text=PANTS",
    color: "Charcoal",
    size: "32",
    quantity: 1
  },
  {
    id: 3,
    name: "VORTEX TEE",
    price: 89.99,
    image: "https://dummyimage.com/150x150/111111/7888ff&text=TEE",
    color: "Slate Gray",
    size: "L",
    quantity: 1
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [loading, setLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Handle promo code
  const applyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');
    
    if (!promoCode.trim()) {
      setPromoError('Please enter a promo code');
      return;
    }
    
    // Mock promo code validation
    if (promoCode.toUpperCase() === 'ZYBERAX20') {
      setPromoSuccess('Promo code applied: 20% discount');
      // Here you would actually apply the discount
    } else {
      setPromoError('Invalid promo code');
    }
  };

  // Handle checkout
  const handleCheckout = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Redirect to checkout or payment page
      console.log('Proceeding to checkout with items:', cartItems);
      // window.location.href = '/checkout';
    }, 1500);
  };

  return (
    <div className="bg-[#080808] min-h-screen text-white">
      <div className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center">
            <div className="w-8 h-px bg-[#7888FF] mr-3"></div>
            <h2 className="text-xs font-mono text-[#A0A0A0]">YOUR ITEMS</h2>
          </div>
          <h1 className="text-3xl font-light tracking-wider mt-4 mb-2">
            CART_<span className="text-[#7888FF]">SUMMARY</span>
          </h1>
          {cartItems.length === 0 ? (
            <div className="mt-16 text-center">
              <p className="text-[#A0A0A0] mb-8">Your cart is empty.</p>
              <Link 
                href="/shop" 
                className="inline-block border border-[#7888FF] px-6 py-3 text-[#F5F5F5] text-sm font-mono tracking-wider hover:bg-[#7888FF] hover:text-[#111111] transition-all duration-300"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
              {/* Cart Items - Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Items List */}
                <div className="border-b border-[#222222] pb-2 hidden md:flex justify-between text-xs font-mono text-[#A0A0A0]">
                  <div className="w-1/2">PRODUCT</div>
                  <div className="w-1/6 text-center">PRICE</div>
                  <div className="w-1/6 text-center">QUANTITY</div>
                  <div className="w-1/6 text-center">TOTAL</div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.id} className="border-b border-[#222222] pb-6 flex flex-col md:flex-row">
                    {/* Product Info */}
                    <div className="flex md:w-1/2 space-x-4 mb-4 md:mb-0">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#111111] flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-[#F5F5F5] text-lg font-light">{item.name}</h3>
                        <p className="text-[#A0A0A0] text-xs mt-1">Color: {item.color}</p>
                        <p className="text-[#A0A0A0] text-xs">Size: {item.size}</p>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-[#7888FF] text-xs mt-3 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price - Mobile View */}
                    <div className="flex justify-between md:hidden text-sm mb-2">
                      <span className="text-[#A0A0A0]">Price:</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity - Mobile View */}
                    <div className="flex justify-between md:hidden text-sm mb-2">
                      <span className="text-[#A0A0A0]">Quantity:</span>
                      <div className="flex items-center space-x-3">
                        <button 
                          className="w-6 h-6 border border-[#333333] flex items-center justify-center hover:border-[#7888FF] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          className="w-6 h-6 border border-[#333333] flex items-center justify-center hover:border-[#7888FF] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Total - Mobile View */}
                    <div className="flex justify-between md:hidden text-sm">
                      <span className="text-[#A0A0A0]">Total:</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    
                    {/* Desktop View - Price, Quantity, Total */}
                    <div className="hidden md:block md:w-1/6 text-center">
                      <div className="text-[#F5F5F5]">${item.price.toFixed(2)}</div>
                    </div>
                    
                    <div className="hidden md:flex md:w-1/6 items-center justify-center">
                      <div className="flex items-center space-x-2">
                        <button 
                          className="w-6 h-6 border border-[#333333] flex items-center justify-center hover:border-[#7888FF] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button 
                          className="w-6 h-6 border border-[#333333] flex items-center justify-center hover:border-[#7888FF] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="hidden md:block md:w-1/6 text-center">
                      <div className="text-[#F5F5F5]">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-8 flex justify-between items-center">
                  <Link 
                    href="/shop" 
                    className="flex items-center text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Continue Shopping
                  </Link>
                  
                  <button 
                    onClick={() => setCartItems([])}
                    className="text-[#A0A0A0] hover:text-[#F5F5F5] transition-colors text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              
              {/* Order Summary - Right Column */}
              <div className="bg-[#111111] p-8">
                <h2 className="text-xl font-light mb-6 pb-4 border-b border-[#222222]">
                  ORDER SUMMARY
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A0A0A0]">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-[#A0A0A0]">Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-[#A0A0A0]">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  {promoSuccess && (
                    <div className="bg-[#1E3A8A]/20 border border-[#3B82F6]/30 text-[#60A5FA] p-3 text-xs">
                      {promoSuccess}
                    </div>
                  )}
                  
                  {/* Promo Code */}
                  <form onSubmit={applyPromoCode} className="pt-2">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Promo Code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow bg-[#080808] border border-[#333333] p-3 text-white text-xs focus:border-[#7888FF] outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        className="bg-[#333333] text-[#F5F5F5] p-3 text-xs hover:bg-[#444444] transition-colors ml-2"
                      >
                        APPLY
                      </button>
                    </div>
                    {promoError && (
                      <p className="text-red-500 text-xs mt-1">{promoError}</p>
                    )}
                  </form>
                  
                  <div className="pt-4 pb-4 border-t border-b border-[#222222] mt-6">
                    <div className="flex justify-between text-base">
                      <span className="font-mono">TOTAL</span>
                      <span className="text-[#7888FF]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={loading || cartItems.length === 0}
                    className={`w-full py-4 text-sm font-mono tracking-wider transition-colors ${
                      loading || cartItems.length === 0
                        ? 'bg-[#333333] text-[#A0A0A0] cursor-not-allowed' 
                        : 'bg-[#7888FF] text-[#111111] hover:bg-[#6677ee]'
                    }`}
                  >
                    {loading ? 'PROCESSING...' : 'CHECKOUT'}
                  </button>
                  
                  <div className="text-xs text-[#A0A0A0] space-y-1 pt-6">
                    <p>We accept:</p>
                    <div className="flex space-x-2">
                      <div className="w-10 h-6 bg-[#222222] rounded"></div>
                      <div className="w-10 h-6 bg-[#222222] rounded"></div>
                      <div className="w-10 h-6 bg-[#222222] rounded"></div>
                      <div className="w-10 h-6 bg-[#222222] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 