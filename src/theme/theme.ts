import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  primary: {
    main: '#0075ff',
    dark: '#000000',
    light: '#ffffff',
  },
  background: {
    main: '#ffffff',
    dark: '#000000',
    dark2: '#04293A',
    dark3: '#041C32',
  },
};

const breakpoints = {
  // md: '768px',
  lg: '960px',
};

export const theme = extendTheme({ colors, breakpoints });
