import { Grid as GridMui, GridProps, styled } from '@mui/material';
import React, { FC } from 'react';
import { colorsLight } from '../../../theme/colors/colorsLight';
import { typography } from '../../../theme/typography';

interface ITdProps extends GridProps {
  children: any;
  type?: string;
}

const GridTableCell: FC<ITdProps> = (props) => {
  return (
    <Grid item {...props}>
      {props.children}
    </Grid>
  );
};

const Grid = styled(GridMui)<{ type?: string }>`
  padding: ${(props) => (props.type === 'th' ? '20px 12px 0' : '20px 12px')};
  color: ${(props) => (props.type === 'th' ? colorsLight.action.active : colorsLight.text.primary)};
  ${props => props.type === 'th' ? typography.buttonMedium : typography.body2}

  &:first-of-type {
    padding-left: 20px;
  }

  &:last-of-type {
    padding-right: 20px;
  }
`;

export default GridTableCell;
