import { colorsDark } from './../../colors/colorsDark';

export const MuiIconButton = {
  styleOverrides: {
    root: {
      borderRadius: '6px',
      '&.MuiIconButton-colorPrimary': {
        backgroundColor: colorsDark.background.paper,
        color: colorsDark.action.active,
      },
    },
  },
};
