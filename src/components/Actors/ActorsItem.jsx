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
import { getSpecificActor } from '../../store/slices/actorsSlice';

function ActorsItem() {
  const dispatch = useDispatch();
  const actor = useSelector((state) => state.actorsList.currentActor);
  const films = actor?.films?.join(', ') || '';
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSpecificActor(id));
  }, [dispatch, id]);

  return (
    <Box mb={2} sx={{ minHeight: '70vh', marginLeft: '15px' }}>
      <h2>{actor.fullName}</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
          <img
            src={actor.image}
            alt={`${actor.fullName}'s photo`}
            style={{
              width: '100%',
              maxWidth: '200px',
              height: 'auto',
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7, xl: 7 }}>
         <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Full Name</TableCell>
                  <TableCell>{actor.fullName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Birth Year</TableCell>
                  <TableCell>{actor.birthYear}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Death Year</TableCell>
                  <TableCell>{actor.deathYear || '-'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Nationality</TableCell>
                  <TableCell>{actor.nationality}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Films</TableCell>
                  <TableCell>{films}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ActorsItem;
