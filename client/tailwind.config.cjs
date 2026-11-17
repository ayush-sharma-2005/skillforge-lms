// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // use .dark class for dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-muted': 'var(--surface-muted)',
        border: 'var(--border)',
        'border-strong': 'var(--border-strong)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'primary-dark': 'var(--primary-dark)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        tan: 'var(--tan)',
        'on-primary': 'var(--on-primary)',
        sidebar: 'var(--sidebar)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
        'sidebar-muted': 'var(--sidebar-muted)',
        'sidebar-active': 'var(--sidebar-active)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        ring: 'var(--ring)',
      },
      spacing: {
        // 4/8px spacing scale (0.25rem / 0.5rem)
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
      borderRadius: {
        // rounded-xl (0.75rem) and rounded-2xl (1rem)
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        float: 'var(--shadow-float)',
      },
      animation: {
        'bg-gradient': 'bg-gradient 3s ease infinite',
        // Additional custom animations can be added here if needed
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // shadcn/ui uses class-variance-authority which works with Tailwind out of the box
  ],
};
