module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    zIndex: {
      10: 3010,
      20: 3020,
      30: 3030,
      40: 3040,
      50: 3050
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      padding: {
        video: '2rem calc(50% - 50px)',
        '85/100': '85%',
        '60/100': '60%'
      },
      height: {
        0.1: '0.1rem',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10vw': '10vw',
        '20vw': '20vw',
        '40vw': '40vw',
        'calendar-height': 'calc(100vh - 17rem)',
        'hamburguermenu-mobile': 'calc(100vh - 10.75rem)'
      },
      width: {
        0.1: '0.1rem',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10vw': '10vw',
        '20vw': '20vw',
        '40vw': '40vw',
        192: '44rem',
        'fit-content': 'fit-content',
        desktop: '1100px'
      },
      inset: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '7vw': '7vw',
        '10vw': '10vw',
        '11vw': '11vw',
        '15vw': '15vw',
        '32vw': '32.5vw',
        '18neg': '-4.5rem',
        '34neg': '-9.5rem',
        30: '7.4rem'
      }
    },
    screens: {
      mobile: { max: '1099px' },
      desktop: '1100px',
      small: { max: '380px' }
    },
    plugins: [],
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      '70vw': '70vw',
      '80vw': '80vw',
      '90vw': '90vw'
    },
    maxWidth: {
      0: '0',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      20: '20rem',
      22: '22rem',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      '3/4': '75%',
      '9/10': '90%',
      full: '100%',
      '70vw': '70vw',
      '80vw': '80vw',
      '90vw': '90vw',
      '100vw': '100vw'
    },
    minHeight: {
      65: '65px',
      300: '300px',
      full: '100%',
      '30vh': '30vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '100vh': '100vh'
    },
    maxHeight: {
      65: '65px',
      500: '500px',
      '30vh': '30vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '1/3': '33%',
      full: '100%',
      'hamburguermenu-mobile': 'calc(100vh - 10.75rem)',
      'hamburguermenu-desktop': 'calc(100vh - 13.75rem)',
      'hamburguermenu-desktop-full': 'calc(100vh - 7.75rem)'
    }
  }
}
