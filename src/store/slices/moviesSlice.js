import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setError, setPending, checkStatus } from '../../util/reduxHelpers';
import api from '../../api/api';

const NAME_MOVIES = 'movies';
const initialState = {
  movies: [],
  currentMovie: {},
  error: null,
  isPending: false,
};

export const getMovies = createAsyncThunk(
  `${NAME_MOVIES}/getMovies`,
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_MOVIES}`);
      checkStatus(status, 'getting movies');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSpecificMovie = createAsyncThunk(
  `${NAME_MOVIES}/getSpecificMovie`,
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_MOVIES}/${id}`);
      checkStatus(status, 'getting movie');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createMovie = createAsyncThunk(
  `${NAME_MOVIES}/createMovie`,
  async (movie, { rejectWithValue }) => {
    try {
      const { data, status } = await api.post(`/${NAME_MOVIES}`, movie);
      checkStatus(status, 'creating movie');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateMovie = createAsyncThunk(
  `${NAME_MOVIES}/updateMovie`,
  async (movie, { rejectWithValue }) => {
    try {
      const { data, status } = await api.put(
        `/${NAME_MOVIES}/${movie.id}`,
        movie
      );
      checkStatus(status, 'updating movie');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteMovie = createAsyncThunk(
  `${NAME_MOVIES}/deleteMovie`,
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await api.delete(`/${NAME_MOVIES}/${id}`);
      checkStatus(status, 'deleting movie');
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const moviesSlice = createSlice({
  name: NAME_MOVIES,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getSpecificMovie.fulfilled, (state, { payload }) => {
      state.currentMovie = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(createMovie.fulfilled, (state, { payload }) => {
      state.movies.push(payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(updateMovie.fulfilled, (state, { payload }) => {
      state.movies = state.movies.map((movie) =>
        movie.id === payload.id ? payload : movie
      );
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(deleteMovie.fulfilled, (state, { payload }) => {
      state.movies = state.movies.filter((movie) => movie.id !== payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getMovies.pending, setPending);
     builder.addCase(getSpecificMovie.pending, setPending);
    builder.addCase(createMovie.pending, setPending);
    builder.addCase(updateMovie.pending, setPending);
    builder.addCase(deleteMovie.pending, setPending);
    builder.addCase(getMovies.rejected, setError);
    builder.addCase(getSpecificMovie.rejected, setError);
    builder.addCase(createMovie.rejected, setError);
    builder.addCase(updateMovie.rejected, setError);
    builder.addCase(deleteMovie.rejected, setError);
  },
});

export default moviesSlice.reducer;
