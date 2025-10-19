import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setError, setPending, checkStatus } from '..';
import api from '../../api/api';

const NAME_DIRECTORS = 'directors';
const initialState = {
  directors: [],
  currentDirector: {},
  error: null,
  isPending: false,
};

export const getDirectors = createAsyncThunk(
  `${NAME_DIRECTORS}/getDirectors`,
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_DIRECTORS}`);
      checkStatus(status, 'getting directors');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSpecificDirector = createAsyncThunk(
  `${NAME_DIRECTORS}/getSpecificDirector`,
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_DIRECTORS}/${id}`);
      checkStatus(status, 'getting directors');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createDirector = createAsyncThunk(
  `${NAME_DIRECTORS}/createDirector`,
  async (director, { rejectWithValue }) => {
    try {
      const { data, status } = await api.post(`/${NAME_DIRECTORS}`, director);
      checkStatus(status, 'creating director');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateDirector = createAsyncThunk(
  `${NAME_DIRECTORS}/updateDirector`,
  async (director, { rejectWithValue }) => {
    try {
      const { data, status } = await api.put(
        `/${NAME_DIRECTORS}/${director.id}`,
        director
      );
      checkStatus(status, 'updating director');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteDirector = createAsyncThunk(
  `${NAME_DIRECTORS}/deleteDirector`,
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await api.delete(`/${NAME_DIRECTORS}/${id}`);
      checkStatus(status, 'deleting director');
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const directorsSlice = createSlice({
  name: NAME_DIRECTORS,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDirectors.fulfilled, (state, { payload }) => {
      state.directors = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getSpecificDirector.fulfilled, (state, { payload }) => {
      state.currentDirector = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(createDirector.fulfilled, (state, { payload }) => {
      state.directors.push(payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(updateDirector.fulfilled, (state, { payload }) => {
      state.directors = state.directors.map((director) =>
        director.id === payload.id ? payload : director
      );
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(deleteDirector.fulfilled, (state, { payload }) => {
      state.directors = state.directors.filter(
        (director) => director.id !== payload
      );
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getDirectors.pending, setPending);
    builder.addCase(getSpecificDirector.pending, setPending);
    builder.addCase(createDirector.pending, setPending);
    builder.addCase(updateDirector.pending, setPending);
    builder.addCase(deleteDirector.pending, setPending);
    builder.addCase(getDirectors.rejected, setError);
    builder.addCase(getSpecificDirector.rejected, setError);
    builder.addCase(createDirector.rejected, setError);
    builder.addCase(updateDirector.rejected, setError);
    builder.addCase(deleteDirector.rejected, setError);
  },
});

export default directorsSlice.reducer;
