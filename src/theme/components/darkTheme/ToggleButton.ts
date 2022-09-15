import { colorsDark } from '../../colors/colorsDark';

export const MuiToggleButton = {
  styleOverrides: {
    root: {
      '&.MuiToggleButton-primary.Mui-selected': {
        backgroundColor: colorsDark.primary.outlinedHoverBackground,
      },
    },
  },
};
