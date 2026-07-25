import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        purple: 'var(--purple)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
} satisfies Config;
