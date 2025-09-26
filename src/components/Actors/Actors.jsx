import { Route, Routes, Navigate } from 'react-router-dom';
// ==================================================
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
    </>
  );
}

export default Actors;
