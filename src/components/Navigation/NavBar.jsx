import { Link } from 'react-router-dom';
// ============================
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
function NavBar() {
  const styleListItems = { width: '100%', p:'5px' };
  return (
    <List
      dense
      sx={{
        position: 'sticky',
        top: '0px',
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
            <Link to=''>Home</Link>
        </Paper>
      </ListItem>
      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/movies'>Movies</Link>
        </Paper>
      </ListItem>
      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/actors'>Actors</Link>
        </Paper>
      </ListItem>
      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/directors'>Directors</Link>
        </Paper>
      </ListItem>
      <ListItem>
        <Paper sx={styleListItems}>
          <Link to='/studios'>Studios</Link>
        </Paper>
      </ListItem>
    </List>
  );
}

export default NavBar;
