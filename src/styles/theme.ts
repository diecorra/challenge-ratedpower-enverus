export const BLUE_SKY = '#2596be';
export const BLUE_SKY_LIGHT = 'rgba(28,86,134, 0.8)';
export const BLUE_SKY_DARK = '#154064';
export const WHITE = '#dce8e6';
export const BLACK_OPACITY = 'rgba(255,255,255, 0.2)';

export const lightTheme = {
  text: {
    primary: `black`,
    secondary: WHITE,
  },
  navigator: {
    primary: BLUE_SKY_DARK,
    secondary: BLUE_SKY_LIGHT,
  },
  button: {
    primary: BLUE_SKY_LIGHT,
    secondary: '#cccccc',
    border: 'black',
  },
  body: WHITE,
  table: {
    text: 'black',
    border: 'black',
    alternate: '#a1b4d4',
    hover: BLUE_SKY_LIGHT,
  },
  card: WHITE,
};

export const darkTheme = {
  text: {
    primary: WHITE,
    secondary: WHITE,
  },
  navigator: {
    primary: BLUE_SKY_DARK,
    secondary: BLUE_SKY_LIGHT,
  },
  button: {
    primary: BLUE_SKY_LIGHT,
    secondary: '#b0a7a7',
    border: WHITE,
  },
  body: '#2b2b2e',
  table: {
    text: WHITE,
    border: WHITE,
    alternate: BLACK_OPACITY,
    hover: BLUE_SKY_LIGHT,
  },
  card: WHITE,
};
