import type { NextPage } from 'next'
import { Link, SEO } from '../src/Components';
import { Box, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

const Home: NextPage = () => <>
  <SEO />
  <Grid container pb={4}>
    <Grid item xs={8}>
      <Typography variant="subtitle2">About me:</Typography>
      <p>Senior fullstack developer @ A&C systems</p>
      <Box display="flex" gap={2}>
        <Link sx={{ display: 'inherit' }} href="/resume"><ArrowRight />Resume</Link>
        <Link sx={{ display: 'inherit' }} href="/portfolio"><ArrowRight />Portfolio</Link>
      </Box>
    </Grid>
    <Grid item xs={4}>
      <img width={100} src="/img/symfony-cert.png" alt="Symfony certification badge" />
    </Grid>
  </Grid>

  <Typography variant="subtitle2">Authored:</Typography>
  <List dense>
    <ListItem>
      <ListItemText>
        <Typography variant="subtitle1">Posts:</Typography>
        <ul>
          <li>
            <Link href="/posts/computer-science-education">
              Major issues with computer science education
            </Link>
          </li>
        </ul>
      </ListItemText>
    </ListItem>
    {/*<ListItem>*/}
    {/*  <ListItemText>*/}
    {/*    <Typography variant="subtitle1">Educational:</Typography>*/}
    {/*    <ul>*/}
    {/*      <li>*/}
    {/*        <Link href="/courses/php-beginners">*/}
    {/*          PHP For Beginners (🚧WIP🚧)*/}
    {/*        </Link>*/}
    {/*      </li>*/}
    {/*      <li>*/}
    {/*        <Link href="/courses/php-rest-api">*/}
    {/*          PHP REST API From Scratch (🚧WIP🚧)*/}
    {/*        </Link>*/}
    {/*      </li>*/}
    {/*    </ul>*/}
    {/*  </ListItemText>*/}
    {/*</ListItem>*/}
  </List>
</>;

export default Home;
