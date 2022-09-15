import { Grid as GridMui, GridProps, styled } from '@mui/material';
import React, { FC } from 'react';
import { colorsDark } from '../../../theme/colors/colorsDark';

interface ITrProps extends GridProps {
  children: any;
  type?: string;
}

const GridTableRowDark: FC<ITrProps> = (props) => {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

const Grid = styled(GridMui)<{ type?: string }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-radius: 6px;
  margin-bottom: 4px;
  overflow: hidden;
  background-color: ${(props) => (props.type === 'thead' ? 'transparent' : colorsDark.background.paper)};
`;

export default GridTableRowDark;
