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
export function checkStatus(status, actionType) {
  if (status >= 400) {
    throw new Error(
      `Something went wrong with ${actionType}. Error status is ${status}`
    );
  }
}
export function setPending(state) {
  state.isPending = true;
  state.error = null;
}
export function setError(state, { payload }) {
  state.isPending = false;
  state.error = payload;
}