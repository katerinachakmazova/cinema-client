import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//==================================================
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//==================================================
import {
  getDirectors,
  deleteDirector,
} from '../../store/slices/directorsSlice';

function DirectorsList() {
  const dispatch = useDispatch();
  const directors = useSelector((state) => state.directorsList.directors);

  useEffect(() => {
    dispatch(getDirectors());
  }, [dispatch]);

  return (
    <>
      <h2>Directors</h2>
      <List sx={{ marginLeft: '20px' }}>
        {directors.map((director) => (
          <ListItem
            key={director.id}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            divider={true}
          >
            <Link
              to={`/directors/${director.id}`}
              style={{ display: 'flex' }}
            >
              <ListItemAvatar>
                <Avatar src={director.image} />
              </ListItemAvatar>
              <ListItemText primary={director.fullName} />
            </Link>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <IconButton onClick={() => dispatch(deleteDirector(director.id))}>
                <DeleteIcon />
              </IconButton>
              <Link to={`/directors/new/${director.id}`}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>
      <Stack>
        <Link to='/directors/new'>
          <Button
            size='medium'
            variant='outlined'
            style={{
              margin: '10px',
            }}
          >
            Add Director
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default DirectorsList;
