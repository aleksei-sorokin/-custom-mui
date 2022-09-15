import { colorsDark } from './../../colors/colorsDark';
import { typography } from '../../typography';

export const MuiTableCell = {
  styleOverrides: {
    root: {
      backgroundColor: colorsDark.background.paper,
      padding: '9.5px 20px',
      color: colorsDark.text.secondary,
      ...typography.body2,
      '&:first-of-type': {
        borderRadius: '6px 0 0 6px',
      },
      '&:last-child': {
        borderRadius: '0 6px 6px 0',
      },
    },
  },
};
