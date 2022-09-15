import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { typography } from '../../typography';
import { colorsLight } from './../../colors/colorsLight';

export const MuiTab: OverridesStyleRules = {
  styleOverrides: {
    root: {
      textTransform: 'unset',
      ...typography.buttonMedium,
      color: colorsLight.text.secondary,
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: 'unset',
      minHeight: 'unset',
      marginRight: '42px',

      '&.Mui-selected': {
        color: colorsLight.text.primary,

        'svg path': {
          color: colorsLight.primary.main,
        },
      },
    },
  },
};
