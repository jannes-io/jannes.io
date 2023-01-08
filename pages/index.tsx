import type { NextPage } from 'next'
import { Link, SEO } from '../src/Components';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Home: NextPage = () => <>
  <SEO />
  <Typography variant="subtitle2">About me:</Typography>
  <p>Senior & lead fullstack developer @ A&C systems</p>
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
    <ListItem>
      <ListItemText>
        <Typography variant="subtitle1">Educational:</Typography>
        <ul>
          <li>
            <Link href="/courses/php-beginners">
              PHP for beginners
            </Link>
          </li>
        </ul>
      </ListItemText>
    </ListItem>
  </List>
</>;

export default Home;
