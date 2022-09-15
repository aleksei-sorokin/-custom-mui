import { typography } from '../../typography';
import { colorsLight } from './../../colors/colorsLight';

export const MuiTableHead = {
  styleOverrides: {
    root: {
      background: 'transparent',
      tr: {
        boxShadow: 'none',
      },
      th: {
        border: 'none',
        background: 'none',
        color: colorsLight.action.active,
        ...typography.subtitle2,
      },
    },
  },
};
