import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addShoppingListAPI,
  getShoppingListAPI,
  removeShoppingListAPI,
} from '../../service/API/ShoppingListAPI';

export const fetchShoppingList = createAsyncThunk(
  'shopping-list/get',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    const persisterUserId = state.auth.user._id;
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      const data = await getShoppingListAPI(persisterToken, persisterUserId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteShoppingListItem = createAsyncThunk(
  'shopping-list/remove/id',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      await removeShoppingListAPI(persisterToken, id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addShoppingListItem = createAsyncThunk(
  'shopping-list/add',
  async (body, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    if (persisterToken === null) {
      return thunkAPI.rejectWithValue();
    }
    try {
      await addShoppingListAPI(persisterToken, body);
      return body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
