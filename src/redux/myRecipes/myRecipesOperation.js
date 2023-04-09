import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../service/API/MyRecipesAPI';

export const fetchMyRecipes = createAsyncThunk(
  'own-recipes/id',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persisterToken = state.auth.token;
    // const persisterUserId = state.auth.user._id;
    const persisterToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';

    const persisterUserId = '642dbbdc817376e23cb1f298';
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await api.fetchMyRecipes(persisterToken, persisterUserId);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyRecipe = createAsyncThunk(
  'own-recipes/remove/id',
  async (id, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persisterToken = state.auth.token;
    const persisterToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      await api.deleteMyRecipe(persisterToken, id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToMyRecipes = createAsyncThunk(
  'addFavorite',
  async (id, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persisterToken = state.auth.token;
    // const persisterToken =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmRiYmRjODE3Mzc2ZTIzY2IxZjI5OCIsImlhdCI6MTY4MDg5MjEwNSwiZXhwIjoxNjgyNjkyMTA1fQ.Y22mj81DN2y6H8_WspbIOS_E6qCwuXKrx-VdoWP1Y9k';

    const persisterToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzA4NmZiNWQ3OGY3MTQzYTJmOWZkNyIsImlhdCI6MTY4MDkwMzQ0OCwiZXhwIjoxNjgxMTU1NDQ4fQ.Ud8bFSg0dQXBvrJD7TtL85FS2sjl6Y2IUI4_fLwoXVI';
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
