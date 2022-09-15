import { GridProps } from '@mui/material';
import { FC } from 'react';
interface ITrProps extends GridProps {
    children: any;
    type?: string;
}
declare const GridTableRowDark: FC<ITrProps>;
export default GridTableRowDark;
