import { Link } from 'react-router-dom';
// ============================
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

function NavBar() {
    const isMdUp = useMediaQuery('(min-width:900px)');
  const styleListItems = { width: '100%', p: '10px' };
  const styleTypographies = { color: 'black' };
  return (
      <>
      {isMdUp ? <h2 sx={{margin: '0px'}}>Menu</h2> : ''}
      <List
        dense
        sx={{
          position: 'sticky',
          top: '72px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '300px',
          width: '100%',

        }}
      >
        <ListItem>
          <Paper sx={styleListItems} elevation={4}>
            <Link to='/'>
              <Typography variant='body1' sx={styleTypographies}>
                Home
              </Typography>
            </Link>
          </Paper>
        </ListItem>

        <ListItem>
          <Paper sx={styleListItems} elevation={4}>
            <Link to='/movies'>
              <Typography variant='body1' sx={styleTypographies}>
                Movies
              </Typography>
            </Link>
          </Paper>
        </ListItem>

        <ListItem>
          <Paper sx={styleListItems} elevation={4}>
            <Link to='/actors'>
              <Typography variant='body1' sx={styleTypographies}>
                Actors
              </Typography>
            </Link>
          </Paper>
        </ListItem>

        <ListItem>
          <Paper sx={styleListItems} elevation={4}>
            <Link to='/directors'>
              <Typography variant='body1' sx={styleTypographies}>
                Directors
              </Typography>
            </Link>
          </Paper>
        </ListItem>

        <ListItem>
          <Paper sx={styleListItems} elevation={4}>
            <Link to='/studios'>
              <Typography variant='body1' sx={styleTypographies}>
                Studios
              </Typography>
            </Link>
          </Paper>
        </ListItem>
      </List>
      </>
  );
}

export default NavBar;
