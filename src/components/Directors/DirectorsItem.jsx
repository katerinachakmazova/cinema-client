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
import { getSpecificDirector } from '../../store/slices/directorsSlice';

function DirectorsItem() {
  const dispatch = useDispatch();
  const director = useSelector((state) => state.directorsList.currentDirector);
  const films = director?.films?.join(', ') || '';
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSpecificDirector(id));
  }, [dispatch, id]);

  return (
    <Box mb={2} sx={{ minHeight: '70vh', marginLeft: '15px' }}>
      <h2>{director.fullName}</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
          <img
            src={director.image ? director.image : '../../../public/not_found.jpg'}
            alt={`${director.fullName}'s photo`}
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
                  <TableCell sx={{ fontWeight: 'bold' }}>Full Name</TableCell>
                  <TableCell>{director.fullName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Birth Year</TableCell>
                  <TableCell>{director.birthYear}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Death Year</TableCell>
                  <TableCell>{director.deathYear || '-'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Nationality</TableCell>
                  <TableCell>{director.nationality}</TableCell>
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

export default DirectorsItem;
