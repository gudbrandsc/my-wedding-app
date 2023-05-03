import { createTheme } from '@mui/material';

export const WeddingTheme = createTheme({
  typography: {
    fontFamily: [
      'Cormorant Garamond',
      'Tartlers End',
      'Roboto',
      'helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    body1: { fontSize: '1.1rem' },
    body2: { fontSize: '1.1rem' },
    subtitle1: { fontSize: '1.1rem' },
    h5: { fontSize: '1.55rem' }
  },
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#83ac8a',
      light: '#83ac8a',
      main: '#83ac8a'
    },
    secondary: {
      contrastText: '#333',
      dark: '#8796A5',
      light: '#c2c2c2',
      main: '#8796A5'
    },
    success: {
      contrastText: '#fff',
      dark: '#a9c6c1',
      light: '#a9c6c1',
      main: '#a9c6c1'
    },
    error: {
      contrastText: '#fff',
      dark: '#f25c54',
      light: '#f25c54',
      main: '#f25c54'
    },
    info: {
      contrastText: '#fff',
      dark: '#00b9f5',
      light: '#00b9f5',
      main: '#00b9f5'
    },
    warning: {
      contrastText: '#fff',
      dark: '#f79d65',
      light: '#f79d65',
      main: '#f79d65'
    },
    default: {
      contrastText: '#fff',
      dark: '#fff',
      light: '#fff',
      main: '#fff'
    },
    background: {
      default: '#fdfbfa',
      paper: '#fdfbfa'
    },
    border: {
      white: '#fff',
      light: '#e0e0e0',
      dark: 'rgba(255, 255, 255, 0.12)'
    },
    common: {
      white: '#fff',
      black: '#000',
      lightGray: '#f4f5f7',
      darkGray: '#696975',
      paperBlue: '#ffffff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.85)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0,0,0,0.12)'
    }
  }
});
