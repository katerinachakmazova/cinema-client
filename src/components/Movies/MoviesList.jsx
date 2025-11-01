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
  getMovies,
  deleteMovie,
} from '../../store/slices/moviesSlice';

function MoviesList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesList.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <h2>Movies</h2>
      <List sx={{ marginLeft: '20px' }}>
        {movies.map((movie) => (
          <ListItem
            key={movie.id}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            divider={true}
          >
            <Link
              to={`/movies/${movie.id}`}
              style={{ display: 'flex' }}
            >
              <ListItemAvatar>
                <Avatar src={movie.poster} />
              </ListItemAvatar>
              <ListItemText primary={movie.title} />
            </Link>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <IconButton onClick={() => dispatch(deleteMovie(movie.id))}>
                <DeleteIcon />
              </IconButton>
              <Link to={`/movies/new/${movie.id}`}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>
      <Stack>
        <Link to='/movies/new'>
          <Button
            size='medium'
            variant='outlined'
            style={{
              margin: '10px',
            }}
          >
            Add Movie
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default MoviesList;
