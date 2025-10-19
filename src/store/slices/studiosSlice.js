import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setError, setPending, checkStatus } from '..';
import api from '../../api/api';

const NAME_STUDIOS = 'studios';
const initialState = {
  currentStudio: {}, 
  studios: [],
  error: null,
  isPending: false,
};

export const getStudios = createAsyncThunk(
  `${NAME_STUDIOS}/getStudios`,
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_STUDIOS}`);
      checkStatus(status, 'getting studios');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSpecificStudio = createAsyncThunk(
  `${NAME_STUDIOS}/getSpecificStudio`,
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_STUDIOS}/${id}`);
      checkStatus(status, 'getting studios');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createStudio = createAsyncThunk(
  `${NAME_STUDIOS}/createStudio`,
  async (studio, { rejectWithValue }) => {
    try {
      const { data, status } = await api.post(`/${NAME_STUDIOS}`, studio);
      checkStatus(status, 'creating studio');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateStudio = createAsyncThunk(
  `${NAME_STUDIOS}/updateStudio`,
  async (studio, { rejectWithValue }) => {
    try {
      const { data, status } = await api.put(
        `/${NAME_STUDIOS}/${studio.id}`,
        studio
      );
      checkStatus(status, 'updating studio');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteStudio = createAsyncThunk(
  `${NAME_STUDIOS}/deleteStudio`,
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await api.delete(`/${NAME_STUDIOS}/${id}`);
      checkStatus(status, 'deleting studio');
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const studiosSlice = createSlice({
  name: NAME_STUDIOS,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getStudios.fulfilled, (state, { payload }) => {
      state.studios = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getSpecificStudio.fulfilled, (state, { payload }) => {
      state.currentStudio = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(createStudio.fulfilled, (state, { payload }) => {
      state.studios.push(payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(updateStudio.fulfilled, (state, { payload }) => {
      state.studios = state.studios.map((studio) =>
        studio.id === payload.id ? payload : studio
      );
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(deleteStudio.fulfilled, (state, { payload }) => {
      state.studios = state.studios.filter((studio) => studio.id !== payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getStudios.pending, setPending);
    builder.addCase(getSpecificStudio.pending, setPending);
    builder.addCase(createStudio.pending, setPending);
    builder.addCase(updateStudio.pending, setPending);
    builder.addCase(deleteStudio.pending, setPending);
    builder.addCase(getStudios.rejected, setError);
    builder.addCase(getSpecificStudio.rejected, setError);
    builder.addCase(createStudio.rejected, setError);
    builder.addCase(updateStudio.rejected, setError);
    builder.addCase(deleteStudio.rejected, setError);
  },
});

export default studiosSlice.reducer;
