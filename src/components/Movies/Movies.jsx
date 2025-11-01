import { Route, Routes, Navigate } from 'react-router-dom';
// ==================================================
import MoviesItem from './MoviesItem';
import MoviesList from './MoviesList';

function Movies() {
  return (
    <>
      <Routes>
        <Route path=':id' element={<MoviesItem />} />
        <Route path='/*' element={<MoviesList />} />
        <Route path='new' element={<Navigate to='/studios/new/:id' />} />
      </Routes>
    </>
  );
}

export default Movies;