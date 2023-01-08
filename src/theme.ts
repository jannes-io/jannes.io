import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Be Vietnam Pro',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '2rem',
    }
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#282b30'
    },
    primary: {
      main: '#d14146',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
