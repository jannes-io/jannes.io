import React from 'react';
import { Box, Button, Divider, Stack } from '@mui/material';
import Link from './Link';

export interface IChapterNavigatorProps {
  prev?: string;
  next?: string;
}

export const ChapterNavigator: React.FC<IChapterNavigatorProps> = ({ prev, next }) => (
  <Box sx={{ mt: 2 }}>
    <Divider />
    <Stack sx={{ m: 2 }} direction="row" justifyContent="space-between">
      <Button
        noLinkStyle
        component={Link}
        variant="outlined"
        disabled={prev === undefined}
        href={prev ?? ''}
      >
        Previous Chapter
      </Button>
      <Button
        noLinkStyle
        component={Link}
        color="primary"
        variant="contained"
        disabled={next === undefined}
        href={next ?? ''}
      >
        Next Chapter
      </Button>
    </Stack>
  </Box>
);

export default ChapterNavigator;
