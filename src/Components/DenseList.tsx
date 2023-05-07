import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

export interface DenseListItemProps {
  icon?: React.ReactNode;
  label: string;
  extraDense?: boolean;
}

export const DenseListItem: React.FC<DenseListItemProps> = ({
  icon,
  label,
  extraDense
}) => <ListItem sx={{
  paddingLeft: 0,
  paddingRight: 0,
  ...(extraDense ? { padding: 0 } : {})
}}>
  {icon && <ListItemIcon sx={{ minWidth: 32 }}>{icon}</ListItemIcon>}
  <ListItemText primary={label} sx={extraDense ? { margin: 0 } : {}} />
</ListItem>;

export default DenseListItem;
