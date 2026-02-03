import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1e40af',    // Deep blue
          secondary: '#7c3aed',  // Purple
          accent: '#06b6d4',     // Cyan
          dark: '#0f172a',       // Slate dark
          light: '#f8fafc',      // Slate light
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #06b6d4 100%)',
      },
    },
  },
  plugins: [],
}
export default config
