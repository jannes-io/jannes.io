import React from 'react';
import { Chip, styled } from '@mui/material';

export const SpacedChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.3),
}))

export default SpacedChip;
