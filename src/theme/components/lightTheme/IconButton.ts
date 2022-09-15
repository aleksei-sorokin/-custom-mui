import { colorsLight } from './../../colors/colorsLight';

export const MuiIconButton = {
  styleOverrides: {
    root: {
      borderRadius: '6px',
      '&.MuiIconButton-colorPrimary': {
        backgroundColor: colorsLight.background.default,
        color: colorsLight.action.active,
      },
    },
  },
};
