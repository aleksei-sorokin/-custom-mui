import { colorsLight } from './../../colors/colorsLight';

export const MuiMenuItem = {
	styleOverrides: {
		root: {
			'&.Mui-selected': {
				backgroundColor: colorsLight.action.hover,
			},
		},
	},
};
