import { colorsLight } from './../../colors/colorsLight';

export const MuiChip = {
  styleOverrides: {
    root: {
      fontSize: '0.75rem',
      lineHeight: '138%',
      letterSpacing: '0.4px',
    },
    outlined: {
      '&.MuiChip-outlined.MuiChip-colorDefault': {
        color: colorsLight.text.secondary,
        backgroundColor: 'transparent',
        borderColor: colorsLight.action.disabled,
      },
    },

    filled: {
      '&.MuiChip-filled.MuiChip-colorPrimary': {
        color: '#fff',
        backgroundColor: '#0091EA',
      },
      '&.MuiChip-filled.MuiChip-colorSuccess': {
        color: '#fff',
        backgroundColor: colorsLight.success.main,
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
