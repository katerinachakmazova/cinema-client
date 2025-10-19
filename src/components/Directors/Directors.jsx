import { Route, Routes, Navigate } from 'react-router-dom';
// ==================================================
import DirectorsItem from './DirectorsItem';
import DirectorsList from './DirectorsList';

function Directors() {
  return (
    <>
      <Routes>
        <Route path=':id' element={<DirectorsItem />} />
        <Route path='/*' element={<DirectorsList />} />
        <Route path='new' element={<Navigate to='/directors/new/:id' />} />
      </Routes>
    </>
  );
}

export default Directors;
