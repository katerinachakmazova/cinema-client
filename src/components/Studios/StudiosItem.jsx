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
import { getSpecificStudio } from '../../store/slices/studiosSlice';

function StudiosItem() {
  const dispatch = useDispatch();
  const studio = useSelector((state) => state.studiosList.currentStudio);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getSpecificStudio(id));
  }, [dispatch, id]);

  return (
    <Box mb={2} sx={{ minHeight: '70vh', marginLeft: '15px' }}>
      <h2>{studio.title}</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
          <img
            src={studio.logo ? studio.logo : '../../../public/not_found.jpg'}
            alt={`${studio.title}'s photo`}
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
                  <TableCell>{studio.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>
                    Foundation Year
                  </TableCell>
                  <TableCell>{studio.foundationYear}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
                  <TableCell>{studio.location}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudiosItem;
