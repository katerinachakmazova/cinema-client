import { createTheme } from '@mui/material';

export const getTheme = (mode) =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 650,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
            background: {
              default: 'rgb(246, 251, 255)',
            },
          }
        : {
            primary: {
              main: 'rgba(255, 255, 255, 0.9)',
              dark: 'rgba(255, 255, 255, 0.3)',
            },
            text: {
              primary: '#fff',
            },
          }),
    },
  });
