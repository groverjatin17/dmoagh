module.exports = {
  theme: {
    screens: {
      mobile: { min: '320px', max: '768px' },
      tablet: { min: '768px', max: '1023px' },
      laptop: { min: '1024px' },
    },
    fontFamily: {
      'serif': ['Libre Baskerville'],
      'openSans': ['Open Sans'],
    },
    inset: {
      '50px': '50px',
      '20px': '20px'
    },
    backgroundSize: {
      '100%': '100%'
    },

    extend: {
      height: {
        '365px': '365px'
      },
      padding: {
        '9.7rem': '9.7rem'
      },
      textColor: {
        '#b2d7ff': '#b2d7ff'
      },
    },
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [],
};
