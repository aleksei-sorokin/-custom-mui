import { typography } from '../../typography';
import { colorsDark } from './../../colors/colorsDark';

export const MuiTablePagination = {
	styleOverrides: {
		root: {
			...typography.caption,
		},
		selectLabel: {
			...typography.caption,
		},
		displayedRows: {
			...typography.caption,
		},
		actions: {
			fontSize: 24,
			'.MuiSvgIcon-fontSizeMedium': {
				fontSize: '24px',
			},
			'.MuiButtonBase-root': {
				'.MuiSvgIcon-root': {
					fill: colorsDark.action.active,
				},
			},
			'.Mui-disabled': {
				'.MuiSvgIcon-root': {
					fill: colorsDark.action.disabled,
				},
			},
		},
	},
};
