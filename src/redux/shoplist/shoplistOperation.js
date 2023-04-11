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
    const persisterUserId = state.auth.user._id;
    try {
      const data = await getShoppingListAPI(persisterUserId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteShoppingListItem = createAsyncThunk(
  'shopping-list/remove/id',
  async (id, thunkAPI) => {
    try {
      await removeShoppingListAPI(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addShoppingListItem = createAsyncThunk(
  'shopping-list/add',
  async (body, thunkAPI) => {
    try {
      await addShoppingListAPI(body);
      return body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
