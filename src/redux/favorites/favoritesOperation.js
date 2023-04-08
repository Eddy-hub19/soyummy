import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../service/API/FavoritesAPI';

export const fetchFavorites = createAsyncThunk(
  'favorite/',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persisterToken = state.auth.token;
    const persisterToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await api.fetchFavorites(persisterToken);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'deleteFavorite/id',
  async (id, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persisterToken = state.auth.token;
    const persisterToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      await api.deleteFavorite(persisterToken, id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  'addFavorite/id',
  async (id, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persisterToken = state.auth.token;
    const persisterToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';

    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      console.log(`id`, id);
      await api.addFavorite(persisterToken, id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const data = await api.postUser(credentials);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/signin',
//   async (credentials, thunkAPI) => {
//     try {
//       const data = await api.logIn(credentials);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
//   try {
//     await api.logOut();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
