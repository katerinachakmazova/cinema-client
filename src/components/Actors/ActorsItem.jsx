import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// ===============================
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
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
  }, [dispatch]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 5, lg: 5, xl: 5 }}>
          <img
            src={actor.image}
            alt={`${actor.fullName}'s photo`}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 7, lg: 7, xl: 7 }}>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Full Name:
            </Typography>
            <Typography variant='subtitle1' align='left'>
              {actor.fullName}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Birth Year:
            </Typography>
            <Typography variant='subtitle1' align='left'>
              {actor.birthYear}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Nationality:
            </Typography>
            <Typography variant='subtitle1'>{actor.nationality}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Films:
            </Typography>
            <Typography variant='subtitle1' align='left'>
              {films}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ActorsItem;
