import { Link } from 'react-router-dom';
// ============================
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function NavBar() {
  const styleListItems = { width: '100%', p: '5px' };

  return (
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
        <Paper sx={styleListItems}>
          <Link to=''>
            <Typography variant="body1">Home</Typography>
          </Link>
        </Paper>
      </ListItem>

      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/movies'>
            <Typography variant="body1">Movies</Typography>
          </Link>
        </Paper>
      </ListItem>

      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/actors'>
            <Typography variant="body1">Actors</Typography>
          </Link>
        </Paper>
      </ListItem>

      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/directors'>
            <Typography variant="body1">Directors</Typography>
          </Link>
        </Paper>
      </ListItem>

      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/studios'>
            <Typography variant="body1">Studios</Typography>
          </Link>
        </Paper>
      </ListItem>
    </List>
  );
}

export default NavBar;
