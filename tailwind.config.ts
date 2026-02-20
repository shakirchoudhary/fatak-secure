import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b4b',
          deep: '#060e2a',
          mid: '#12255e',
        },
        orange: {
          DEFAULT: '#f6462d',
          dark: '#c93320',
          gold: '#ffc837',
        },
        teal: {
          DEFAULT: '#00C4B4',
          light: '#3DDDD0',
        },
        gold: '#F5B36D',
        cream: '#FFF9F5',
        brand: {
          purple: '#44226e',
          'purple-deep': '#2d1057',
          'purple-light': '#6b3fa0',
        },
        health: {
          DEFAULT: '#0EA5E9',
          bg: '#EFF9FF',
          dark: '#0369a1',
        },
        life: {
          DEFAULT: '#EC4899',
          bg: '#FFF0F7',
          dark: '#9d174d',
        },
        motor: {
          DEFAULT: '#F59E0B',
          bg: '#FFFBEB',
          dark: '#b45309',
        },
        travel: {
          DEFAULT: '#10B981',
          bg: '#ECFDF5',
          dark: '#065f46',
        },
        accident: {
          DEFAULT: '#8B5CF6',
          bg: '#F5F3FF',
        },
        cancer: {
          DEFAULT: '#EF4444',
          bg: '#FFF5F5',
        },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        's1': '0 2px 12px rgba(13,27,75,.07)',
        's2': '0 8px 32px rgba(13,27,75,.11)',
        's3': '0 24px 64px rgba(13,27,75,.15)',
        'orange': '0 6px 22px rgba(246,70,45,.35)',
        'orange-hover': '0 14px 34px rgba(246,70,45,.5)',
        'health': '0 6px 20px rgba(14,165,233,.3)',
      },
      animation: {
        'blink': 'blink 2s infinite',
        'float1': 'float1 4s ease-in-out infinite',
        'float2': 'float2 4.6s ease-in-out infinite',
        'float3': 'float3 5.1s ease-in-out infinite',
        'spin-slow': 'spin 1s linear infinite',
        'dot-blink': 'dotBlink 1.4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.35', transform: 'scale(.7)' },
        },
        float1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) rotate(.4deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-.4deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0) rotate(-.3deg)' },
          '50%': { transform: 'translateY(-11px) rotate(.3deg)' },
        },
        dotBlink: {
          '0%, 80%, 100%': { opacity: '.2' },
          '40%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
