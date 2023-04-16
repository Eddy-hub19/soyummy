import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../service/API/MyRecipesAPI";

export const fetchMyRecipes = createAsyncThunk("own-recipes/id", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persisterUserId = state.auth.user._id;

  try {
    const data = await api.fetchMyRecipes(persisterUserId);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteMyRecipe = createAsyncThunk("own-recipes/remove/id", async (id, thunkAPI) => {
  try {
    await api.deleteMyRecipe(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addToMyRecipes = createAsyncThunk("own-recipes/add", async (body, thunkAPI) => {
  try {
    await api.addMyRecipes(body);

    return body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
