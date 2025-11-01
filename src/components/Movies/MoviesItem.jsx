import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// ===============================
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// ===============================
import { getSpecificMovie } from '../../store/slices/moviesSlice';

function moviesItem() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.moviesList.currentMovie);
  const producers = movie?.producers?.join(', ') || '';
  const actors = movie?.stars?.join(', ') || '';
  const companies = movie?.companies?.join(', ') || '';
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSpecificMovie(id));
  }, [dispatch, id]);

  return (
    <Box mb={2} sx={{ minHeight: '70vh', marginLeft: '15px' }}>
      <h2>{movie.title}</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
          <img
            src={movie.poster ? movie.poster : '../../../public/not_found.jpg'}
            alt={`${movie.title}'s poster`}
            style={{
              width: '100%',
              maxWidth: '200px',
              height: 'auto',
            }}
            onError={(e) => (e.target.src = '../../../public/not_found.jpg')}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7, xl: 7 }}>
         <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                  <TableCell>{movie.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Release Year</TableCell>
                  <TableCell>{movie.releaseYear}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Stars</TableCell>
                  <TableCell>{actors}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Producers</TableCell>
                  <TableCell>{producers}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Companies</TableCell>
                  <TableCell>{companies}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default moviesItem;
