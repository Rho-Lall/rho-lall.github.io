module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {

    container: {
      center: true,
      padding: '8rem',
      maxWidth: '500px',
    },

    extend: {
      colors: {
        primary: '#50CFD8',
        'primary-light': '#50CFD810',
        secondary: '#4A5568',
        navy: '#1A1A2E',
        'navy-dark': '#0F0F1A',
        lime: '#D0EA3C',
        'lime-light': '#D0EA3C15',
        'lime-muted': '#8BA620',
        'border-soft': '#E8F4F5',
        'bg-soft': '#F0FAFA',
        'bg-gradient-start': '#E8F9FA',
      },
      textColor: {
        primary: '#50CFD8',
        secondary: '#4A5568',
        navy: '#1A1A2E',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        'display-legacy': ['Vollkorn', 'sans-serif'],
        'body-legacy': ['Merriweather', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
