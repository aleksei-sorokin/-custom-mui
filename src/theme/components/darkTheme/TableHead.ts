import { typography } from '../../typography';
import { colorsDark } from './../../colors/colorsDark';

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
        color: colorsDark.text.secondary,
        ...typography.subtitle2,
      },
    },
  },
};
