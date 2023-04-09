import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../service/API/MyRecipesAPI';

export const fetchMyRecipes = createAsyncThunk(
  'own-recipes/id',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    const persisterUserId = state.auth.user._id;
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await api.fetchMyRecipes(persisterToken, persisterUserId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyRecipe = createAsyncThunk(
  'own-recipes/remove/id',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
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
  'own-recipes/add',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      console.log(`body`, body);
      await api.addMyRecipes(persisterToken, body);

      return body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
