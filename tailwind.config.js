module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {

    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Merriweather', 'sans-serif']
    },

    container: {
      center: true,
      padding: '8rem',
      maxWidth: '500px',
    },

    extend: {
      colors: {
        primary: '#057aff', 
        secondary: 'lightslategrey',
      },
      textColor: {
        primary: '#057aff', 
        secondary: 'lightslategrey',
      },
    },
  },
  plugins: [],
}
