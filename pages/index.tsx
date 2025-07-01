import type { NextPage } from 'next'
import { Link, SEO } from '../src/Components';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

const Home: NextPage = () => <>
  <SEO />
  <Grid container pb={4}>
    <Grid item xs={8}>
      <Typography variant="subtitle2">About me:</Typography>
      <p>Senior fullstack developer @ HappIT</p>
      <Box display="flex" gap={2}>
        <Link sx={{ display: 'inherit' }} href="/resume"><ArrowRight />Resume</Link>
        <Link sx={{ display: 'inherit' }} href="/portfolio/index.html"><ArrowRight />Portfolio</Link>
      </Box>
    </Grid>
    <Grid item xs={4}>
      <img width={100} src="/img/symfony-cert.png" alt="Symfony certification badge" />
    </Grid>
  </Grid>
</>;

export default Home;
