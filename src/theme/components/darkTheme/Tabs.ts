import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { typography } from '../../typography';
import { colorsDark } from './../../colors/colorsDark';

export const MuiTab: OverridesStyleRules = {
  styleOverrides: {
    root: {
      textTransform: 'unset',
      ...typography.buttonMedium,
      color: colorsDark.text.secondary,
      paddingLeft: 0,
      paddingRight: 0,
      minWidth: 'unset',
      minHeight: 'unset',
      marginRight: '42px',

      '&.Mui-selected': {
        color: colorsDark.text.primary,

        'svg path': {
          color: colorsDark.primary.main,
        },
      },
    },
  },
};
