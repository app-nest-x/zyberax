"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Implement actual signup logic here
      console.log('Signup attempt:', formData);
    }, 1000);
  };
  
  return (
    <div className="bg-[#080808] min-h-screen text-white">
      {/* Signup Container */}
      <div className="pt-32 pb-16 px-6 max-w-md mx-auto">
        <div className="mb-12">
          <div className="flex items-center">
            <div className="w-8 h-px bg-[#7888FF] mr-3"></div>
            <h2 className="text-xs font-mono text-[#A0A0A0]">NEW PROFILE</h2>
          </div>
          <h1 className="text-3xl font-light tracking-wider mt-4 mb-2">
            CREATE_<span className="text-[#7888FF]">ACCOUNT</span>
          </h1>
          <p className="text-[#A0A0A0] text-sm">
            Join ZYBERAX to access exclusive releases and track your orders.
          </p>
        </div>
        
        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-mono text-[#A0A0A0]">FULL NAME</label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full bg-[#111111] border ${errors.name ? 'border-red-500' : 'border-[#333333]'} py-3 px-4 text-white focus:border-[#7888FF] outline-none transition-colors`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-mono text-[#A0A0A0]">EMAIL</label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full bg-[#111111] border ${errors.email ? 'border-red-500' : 'border-[#333333]'} py-3 px-4 text-white focus:border-[#7888FF] outline-none transition-colors`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="password" className="text-xs font-mono text-[#A0A0A0]">PASSWORD</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`w-full bg-[#111111] border ${errors.password ? 'border-red-500' : 'border-[#333333]'} py-3 px-4 text-white focus:border-[#7888FF] outline-none transition-colors`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="text-xs font-mono text-[#A0A0A0]">CONFIRM PASSWORD</label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className={`w-full bg-[#111111] border ${errors.confirmPassword ? 'border-red-500' : 'border-[#333333]'} py-3 px-4 text-white focus:border-[#7888FF] outline-none transition-colors`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-start space-x-3 pt-2">
            <input
              id="terms"
              type="checkbox"
              required
              className="mt-1 form-checkbox text-[#7888FF] bg-[#111111] border-[#333333] focus:ring-0 focus:ring-offset-0"
            />
            <label htmlFor="terms" className="text-xs text-[#A0A0A0]">
              I agree to ZYBERAX's <Link href="/terms" className="text-[#7888FF] hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-[#7888FF] hover:underline">Privacy Policy</Link>
            </label>
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
            {loading ? 'PROCESSING...' : 'CREATE ACCOUNT'}
          </button>
          
          <div className="text-center mt-6">
            <p className="text-[#A0A0A0] text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-[#7888FF] hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </form>
        
        {/* Visual element */}
        <div className="mt-16 pt-8 border-t border-[#222222]">
          <div className="flex justify-between items-center">
            <div className="text-xs font-mono text-[#A0A0A0]">
              ZYBERAX_MEMBERSHIP
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-[#7888FF] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 