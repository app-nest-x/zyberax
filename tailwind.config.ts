import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/noise.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
        'pulse-border-alt': 'pulseBorderAlt 2.5s ease-in-out infinite',
        'pulse-scale': 'pulseScale 2s ease-in-out infinite',
        'pulse-opacity': 'pulseOpacity 2s ease-in-out infinite',
        'width-pulse': 'widthPulse 4s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
        'spin-slow': 'spin 15s linear infinite',
        'reverse-spin-slow': 'reverseSpin 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.2s forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'text-scroll': 'textScroll 20s linear infinite',
        'progress': 'progress 2s ease-out forwards',
        'pulse-width': 'pulseWidth 4s ease-in-out infinite',
        'bg-pos-animate': 'backgroundPosition 4s ease infinite',
        'ping-small': 'ping 2s ease-in-out infinite',
        'type-writer': 'typeWriter 10s steps(40) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        pulseBorder: {
          '0%, 100%': { borderColor: 'rgba(120, 136, 255, 0.3)' },
          '50%': { borderColor: 'rgba(120, 136, 255, 0.6)' },
        },
        pulseBorderAlt: {
          '0%, 100%': { borderColor: 'rgba(51, 51, 51, 1)' },
          '50%': { borderColor: 'rgba(120, 136, 255, 0.3)' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.2)' },
        },
        pulseOpacity: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        widthPulse: {
          '0%, 100%': { width: '16px' },
          '50%': { width: '32px' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        reverseSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        textScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        progress: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseWidth: {
          '0%, 100%': { width: '75%' },
          '50%': { width: '85%' },
        },
        backgroundPosition: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        typeWriter: {
          '0%': { width: '0', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { width: '100%' }
        }
      },
    },
  },
  plugins: [],
}

export default config 