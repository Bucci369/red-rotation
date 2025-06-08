/*
═══════════════════════════════════════════════════════════════════════════════
🎨 CONFIGURATION VARIABLES - CUSTOMIZE YOUR PHOTOGRAPHER PORTFOLIO
═══════════════════════════════════════════════════════════════════════════════

🎯 PRIMARY COLORS (Dopamine Colors)
- dopamine-500: #f352ff (Primary Pink - CTAs, highlights)
- electric-400: #00d9ff (Secondary Cyan - accents, links)
- coral-500: #ff6b6b (Tertiary Coral - warnings, energy)

⚡ ANIMATION SPEEDS
- parallax-slow: 20s (Background elements)
- parallax-fast: 15s (Foreground elements)
- float: 6s (Floating animations)
- glow: 2s (Glow effects)
- tilt: 0.3s (3D tilt effects)

🎬 VIDEO SETTINGS
- Default autoplay: true
- Default muted: true
- Viewport threshold: 0.5 (50% visible to play)

🔧 PERFORMANCE
- Reduced motion: Respects user preferences
- Intersection observer: All animations
- Lazy loading: Images and videos

═══════════════════════════════════════════════════════════════════════════════
*/

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dopamine Colors - Vibrant highlights for premium feel
        'dopamine': {
          50: '#fef7ff',
          100: '#feeeff', 
          200: '#fdd6ff',
          300: '#fcb4ff',
          400: '#f983ff',
          500: '#f352ff', // Main brand color
          600: '#e920ff',
          700: '#d60fff',
          800: '#b10dd6',
          900: '#920bb1',
        },
        'electric': {
          50: '#f0fdff',
          100: '#ccfbff',
          200: '#99f5ff', 
          300: '#4ceaff',
          400: '#00d9ff', // Secondary brand color
          500: '#00bfff',
          600: '#0099cc',
          700: '#007aa3', 
          800: '#006485',
          900: '#00526e',
        },
        'coral': {
          50: '#fff5f5',
          100: '#ffe3e3',
          200: '#ffcccc',
          300: '#ffaaaa',
          400: '#ff8888',
          500: '#ff6b6b', // Tertiary accent
          600: '#ff5252',
          700: '#ff3333',
          800: '#cc2929',
          900: '#991f1f',
        },
        // Glass morphism colors
        'glass': {
          light: 'rgba(255, 255, 255, 0.1)',
          dark: 'rgba(0, 0, 0, 0.2)',
          border: 'rgba(255, 255, 255, 0.2)',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'parallax-slow': 'parallax-slow 20s linear infinite',
        'parallax-fast': 'parallax-fast 15s linear infinite',
        'tilt': 'tilt 0.3s ease-out',
        'shimmer': 'shimmer 2.5s infinite',
        'slide-in': 'slide-in 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'bounce-slow': 'bounce-slow 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgb(243 82 255 / 0.5), 0 0 10px rgb(243 82 255 / 0.3), 0 0 15px rgb(243 82 255 / 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgb(243 82 255 / 0.8), 0 0 20px rgb(243 82 255 / 0.5), 0 0 30px rgb(243 82 255 / 0.3)' 
          },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgb(0 217 255 / 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgb(0 217 255 / 0.8), 0 0 60px rgb(0 217 255 / 0.4)' 
          },
        },
        'parallax-slow': {
          '0%': { transform: 'translateX(0%) translateY(0%)' },
          '100%': { transform: 'translateX(-100%) translateY(-10%)' },
        },
        'parallax-fast': {
          '0%': { transform: 'translateX(0%) translateY(0%)' },
          '100%': { transform: 'translateX(-100%) translateY(10%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'dark-glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'dopamine-gradient': 'linear-gradient(135deg, #f352ff, #00d9ff)',
        'coral-gradient': 'linear-gradient(135deg, #ff6b6b, #f352ff)',
        'electric-gradient': 'linear-gradient(135deg, #00d9ff, #00bfff)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      rotate: {
        '24': '24deg',
        '36': '36deg',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.glass-morphism': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.dark-glass-morphism': {
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)', 
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 10px currentColor',
        },
        '.hover-lift': {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}