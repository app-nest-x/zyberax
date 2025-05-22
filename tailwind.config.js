/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#7888FF',
        'cyber-purple': '#3D1A5A',
        'cyber-white': '#DCDEFF',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'width-pulse': 'width-pulse 5s ease-in-out infinite',
        'pulse-border': 'pulse-border 4s ease-in-out infinite',
        'pulse-border-alt': 'pulse-border-alt 5s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-delay': 'fade-in 0.6s ease-out 0.2s forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        'pulse-opacity': 'pulse-opacity 2s ease-in-out infinite',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'width-expand': 'width-expand 1s ease-out forwards',
        'bg-pos-animate': 'bg-pos-animate 15s linear infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin-slow': 'reverse-spin 25s linear infinite',
        'text-scroll': 'text-scroll 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            textShadow: '0 0 0px rgba(120, 136, 255, 0)',
            boxShadow: '0 0 0px rgba(120, 136, 255, 0)'
          },
          '50%': { 
            textShadow: '0 0 10px rgba(120, 136, 255, 0.7)',
            boxShadow: '0 0 15px rgba(120, 136, 255, 0.4)'
          },
        },
        'scan-line': {
          '0%': { top: '-100%' },
          '100%': { top: '200%' },
        },
        'width-pulse': {
          '0%, 100%': { width: '4rem', opacity: 0.5 },
          '50%': { width: '8rem', opacity: 1 },
        },
        'pulse-border': {
          '0%, 100%': { borderColor: 'rgba(120, 136, 255, 0.3)' },
          '50%': { borderColor: 'rgba(120, 136, 255, 0.6)' },
        },
        'pulse-border-alt': {
          '0%, 100%': { borderColor: 'rgba(51, 51, 51, 1)' },
          '50%': { borderColor: 'rgba(120, 136, 255, 0.3)' },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: 0, transform: 'translateX(10px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'pulse-opacity': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scaleY(0.7)' },
          '50%': { transform: 'scaleY(1)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translate(-50%, 0)' },
          '50%': { transform: 'translate(-50%, 10px)' },
        },
        'width-expand': {
          '0%': { width: 0 },
          '100%': { width: '4rem' },
        },
        'bg-pos-animate': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'pulse-slow': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'text-scroll': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, #4A5568 1px, transparent 1px), linear-gradient(to bottom, #4A5568 1px, transparent 1px)',
        'scan-line': 'linear-gradient(to bottom, transparent, rgba(120, 136, 255, 0.2), transparent)',
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      backgroundSize: {
        'cyber-grid': '40px 40px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}; 