import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import { setError, setPending, checkStatus } from '..';

const NAME_ACTORS = 'actors';
const initialState = {
  actors: [],
  currentActor: {},
  error: null,
  isPending: false,
};

export const getActors = createAsyncThunk(
  `${NAME_ACTORS}/getActors`,
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_ACTORS}`);
      checkStatus(status, 'getting actors');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getSpecificActor = createAsyncThunk(
  `${NAME_ACTORS}/getSpecificActor`,
  async (id, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${NAME_ACTORS}/${id}`);
      checkStatus(status, 'getting actors');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createActor = createAsyncThunk(
  `${NAME_ACTORS}/createActor`,
  async (actor, { rejectWithValue }) => {
    try {
      const { data, status } = await api.post(`/${NAME_ACTORS}`, actor);
      checkStatus(status, 'creating the actor');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateActor = createAsyncThunk(
  `${NAME_ACTORS}/updateActor`,
  async (actor, { rejectWithValue }) => {
    try {
      const { data, status } = await api.put(
        `/${NAME_ACTORS}/${actor.id}`,
        actor
      );
      checkStatus(status, 'updating the actor');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteActor = createAsyncThunk(
  `${NAME_ACTORS}/deleteActor`,
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await api.delete(`/${NAME_ACTORS}/${id}`);
      checkStatus(status, 'deleting the actor');
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const actorsSlice = createSlice({
  name: NAME_ACTORS,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getActors.fulfilled, (state, { payload }) => {
      state.actors = payload;
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getSpecificActor.fulfilled, (state, {payload}) => {
      state.currentActor = payload;
      state.error = null;
      state.isPending = false;
    })
    builder.addCase(createActor.fulfilled, (state, { payload }) => {
      state.actors.push(payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(updateActor.fulfilled, (state, { payload }) => {
      state.actors = state.actors.map((actor) =>
        actor.id === payload.id ? payload : actor
      );
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(deleteActor.fulfilled, (state, { payload }) => {
      state.actors = state.actors.filter((actor) => actor.id !== payload);
      state.error = null;
      state.isPending = false;
    });
    builder.addCase(getActors.pending, setPending);
    builder.addCase(createActor.pending, setPending);
    builder.addCase(updateActor.pending, setPending);
    builder.addCase(deleteActor.pending, setPending);
    builder.addCase(getSpecificActor.pending, setPending)
    builder.addCase(getActors.rejected, setError);
    builder.addCase(createActor.rejected, setError);
    builder.addCase(updateActor.rejected, setError);
    builder.addCase(deleteActor.rejected, setError);
    builder.addCase(getSpecificActor.rejected, setError)
  },
});

export default actorsSlice.reducer;
