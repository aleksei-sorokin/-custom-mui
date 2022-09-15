import { colorsDark } from './colors/colorsDark';
import { colorsLight } from './colors/colorsLight';
import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { componentsLight } from './components/lightTheme';
import { componentsDark } from './components/darkTheme';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...colorsDark,
  },
  typography: { ...typography },
  components: {
    ...componentsDark,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...colorsLight,
  },
  typography: { ...typography },
  components: {
    ...componentsLight,
  },
});
