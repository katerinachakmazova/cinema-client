import { Route, Routes, Navigate, Link} from 'react-router-dom';
// ====================
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//===========================
import ActorsItem from './ActorsItem';
import ActorsList from './ActorsList';

function Actors() {
  return (
    <>
      <Stack>
        <Link to='new'>
          <Button>Add Actor</Button>
        </Link>
      </Stack>
      <Routes>
        <Route path=':id' element={<ActorsItem/>}/>
        <Route path='/' element={<ActorsList/>}/>
        <Route path='new' element={<Navigate to='/actors/new/:id'/>}/>
      </Routes>
    </>
  );
}

export default Actors;
