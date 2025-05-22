"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Implement actual login logic here
      console.log('Login attempt:', { email, password });
    }, 1000);
  };
  
  return (
    <div className="bg-[#080808] min-h-screen text-white">
      {/* Login Container */}
      <div className="pt-32 pb-16 px-6 max-w-md mx-auto">
        <div className="mb-12">
          <div className="flex items-center">
            <div className="w-8 h-px bg-[#7888FF] mr-3"></div>
            <h2 className="text-xs font-mono text-[#A0A0A0]">SECURE ACCESS</h2>
          </div>
          <h1 className="text-3xl font-light tracking-wider mt-4 mb-2">
            LOGIN_<span className="text-[#7888FF]">PORTAL</span>
          </h1>
          <p className="text-[#A0A0A0] text-sm">
            Access your ZYBERAX profile to manage orders and preferences.
          </p>
        </div>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-mono text-[#A0A0A0]">EMAIL</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#111111] border border-[#333333] py-3 px-4 text-white focus:border-[#7888FF] outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-xs font-mono text-[#A0A0A0]">PASSWORD</label>
              <Link href="/reset-password" className="text-xs font-mono text-[#7888FF] hover:underline">
                FORGOT?
              </Link>
            </div>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#111111] border border-[#333333] py-3 px-4 text-white focus:border-[#7888FF] outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 text-sm font-mono tracking-wider transition-colors ${
              loading 
                ? 'bg-[#333333] text-[#A0A0A0]' 
                : 'bg-[#7888FF] text-[#111111] hover:bg-[#6677ee]'
            }`}
          >
            {loading ? 'PROCESSING...' : 'LOGIN'}
          </button>
          
          <div className="text-center mt-6">
            <p className="text-[#A0A0A0] text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#7888FF] hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </form>
        
        {/* Visual element */}
        <div className="mt-16 pt-8 border-t border-[#222222]">
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-[#A0A0A0]">
              ZYBERAX_SECURE
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#7888FF] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 