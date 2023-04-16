import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/API/FavoritesAPI";

export const fetchFavorites = createAsyncThunk("favorite/", async (_, thunkAPI) => {
  // const state = thunkAPI.getState();
  // const persisterToken = state.auth.token;
  // console.log(`persisterToken`, persisterToken);
  // if (persisterToken === null) {
  //   return thunkAPI.rejectWithValue();
  // }
  try {
    const data = await api.fetchFavorites();
    return data.result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteFavorite = createAsyncThunk("deleteFavorite/id", async (id, thunkAPI) => {
  try {
    await api.deleteFavorite(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addFavorite = createAsyncThunk("addFavorite/id", async (id, thunkAPI) => {
  try {
    await api.addFavorite(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
