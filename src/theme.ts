const colors = {
    transparent: 'transparent',
    black: '#000',
    white: '#ffffff',
    blue: {
      50: '#E6EDF3',
      100: '#CEDCE8;',
      200: '#9CB9D1',
      300: '#6B95BB',
      400: '#3972A4',
      500: '#084F8D',
      600: '#064480',
      700: '#043974',
      800: '#032E67',
      900: '#01235A',
    },
    silver: {
      50: '#ECEFF1',
      100: '#CFD8DC',
      200: '#B0BEC5',
      300: '#90A4AE',
      400: '#78909C',
      500: '#607D8B',
      600: '#546E7A',
      700: '#455A64',
      800: '#37474F',
      900: '#263238',
    },
    larevista: {
      50: '#FBE9E7',
      100: '#F8BBD0',
      200: '#F48FB1',
      300: '#F06292',
      400: '#EC407A',
      500: '#E91E63',
      600: '#D81B60',
      700: '#C2185B',
      800: '#AD1457',
      900: '#880E4F',
    },
    opinion: {
      50: '#F3E5F5',
      100: '#E1BEE7',
      200: '#CE93D8',
      300: '#BA68C8',
      400: '#AB47BC',
      500: '#9C27B0',
      600: '#8E24AA',
      700: '#7B1FA2',
      800: '#6A1B9A',
      900: '#4A148C',
    },
    deportes: {
      50: '#E0F2F1',
      100: '#B2DFDB',
      200: '#80CBC4',
      300: '#4DB6AC',
      400: '#26A69A',
      500: '#009688',
      600: '#00897B',
      700: '#00796B',
      800: '#00695C',
      900: '#004D40',
    },
    entretenimiento: {
      50: '#FBE9E7',
      100: '#FFCCBC',
      200: '#FFAB91',
      300: '#FF8A65',
      400: '#FF7043',
      500: '#FF5722',
      600: '#F4511E',
      700: '#E64A19',
      800: '#D84315',
      900: '#BF360C',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    sucess: {
      200: '#DCF1DA',
      300: '#80E27E',
      500: '#4CAF50',
      800: '#087F23',
    },
    information: {
      200: '#CFE6FA',
      300: '#5E92F3',
      500: '#1565C0',
      800: '#003C8F',
    },
    warning: {
      200: '#FEEFCA',
      300: '#FFF263',
      500: '#FBC02D',
      600: '#C49000',
    },
    danger: {
      200: '#F7D6D5',
      300: '#FF6659',
      500: '#D32F2F',
      600: '#9A0007',
    },
  };
  
  const fontFamily = {
    primary: "'Merriweather', serif",
    secondary: "'Roboto', sans-serif",
  };
  
  const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  };
  
  const padding = {
    0: '0',
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
    10: '5rem',
  };
  
  const margin = {
    0: '0',
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
    10: '5rem',
  };
  
  const sizes = {
    0: '0',
    1: '0.5rem',
    2: '1rem',
    3: '1.5rem',
    4: '2rem',
    5: '2.5rem',
    6: '3rem',
    7: '3.5rem',
    8: '4rem',
    9: '4.5rem',
    10: '5rem',
  }
  
  const customMediaQuery = (minWidth: number) =>
    `@media (min-width: ${minWidth}px)`;
  
  const screen = {
    sm: customMediaQuery(640),
    md: customMediaQuery(768),
    lg: customMediaQuery(1024),
    xl: customMediaQuery(1280),
  };
  
  const fontWeight = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  };
  
  const theme = {
    ...colors,
    fontFamily,
    fontSizes,
    padding,
    margin,
    screen,
    fontWeight,
    sizes
  };
  
  export default theme;
  