import { colorsDark } from './../../colors/colorsDark';

export const MuiChip = {
  styleOverrides: {
    root: {
      fontSize: '0.75rem',
      lineHeight: '138%',
      letterSpacing: '0.4px',
    },
    outlined: {
      '&.MuiChip-outlined.MuiChip-colorDefault': {
        color: colorsDark.text.secondary,
        backgroundColor: 'transparent',
        borderColor: colorsDark.outlineBorder,
      },
    },
    filled: {
      '&.MuiChip-filled.MuiChip-colorPrimary': {
        color: colorsDark.primary.contrastText,
        backgroundColor: '#4EBCFF',
      },
      '&.MuiChip-filled.MuiChip-colorSuccess': {
        color: colorsDark.primary.contrastText,
        backgroundColor: '#84E188',
      },
    },
    sizeSmall: {
      height: '26px',
    },
    sizeMedium: {
      padding: '7px 10px',
    },
    iconMedium: {
      fontSize: 24,
    },
    iconSmall: {
      fontSize: 16,
    },
    avatarMedium: {
      fontSize: 24,
    },
    avatarSmall: {
      fontSize: 18,
    },
  },
};
