import { configureStore } from "@reduxjs/toolkit";
import {logger} from 'redux-logger';
import actorsReducer from './slices/actorsSlice';
import moviesReducer from './slices/moviesSlice';
import studiosReducer from './slices/studiosSlice';
import directorsReducer from './slices/directorsSlice';

export default configureStore({
  reducer: {
    actorsList: actorsReducer,
    moviesList: moviesReducer,
    studiosList: studiosReducer,
    directorsList: directorsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
