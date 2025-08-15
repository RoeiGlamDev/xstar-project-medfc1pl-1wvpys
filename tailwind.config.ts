import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#6A0DAD', // Custom purple color
        secondary: '#FFFFFF', // White color
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});

/
 * Tailwind CSS configuration for CleanSSR.
 * 
 * This configuration sets up a minimal design with a custom color scheme of purple (#6A0DAD) and white (#FFFFFF).
 * It includes animations for a smooth user experience and aligns with the technology industry's branding needs.
 * 
 * @module tailwind.config.ts
 */