import { Route, Routes, Navigate, Link } from 'react-router-dom';
// ====================
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//===========================
import ActorsItem from './ActorsItem';
import ActorsList from './ActorsList';

function Actors() {
  return (
    <>
      <Routes>
        <Route path=':id' element={<ActorsItem />} />
        <Route path='/*' element={<ActorsList />} />
        <Route path='new' element={<Navigate to='/actors/new/:id' />} />
      </Routes>
      <Stack>
        <Link to='new'>
          <Button
            size='medium'
            variant='outlined'
            style={{
              margin: '10px',
            }}
          >
            Add Actor
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default Actors;
