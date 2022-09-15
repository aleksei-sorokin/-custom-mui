import { typography } from '../../typography';
import { colorsLight } from './../../colors/colorsLight';

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
					fill: colorsLight.action.active,
				},
			},
			'.Mui-disabled': {
				'.MuiSvgIcon-root': {
					fill: colorsLight.action.disabled,
				},
			},
		},
	},
};
