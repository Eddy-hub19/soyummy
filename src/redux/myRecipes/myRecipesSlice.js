import { createSlice } from '@reduxjs/toolkit';
import * as myRecipesOperation from '../myRecipes/myRecipesOperation';

const initialState = { data: [], isRefreshing: false };

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(myRecipesOperation.fetchMyRecipes.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        myRecipesOperation.fetchMyRecipes.fulfilled,
        (state, { payload }) => {
          state.data = payload;
          state.isRefreshing = false;
          console.log(state.data);
        }
      )
      .addCase(myRecipesOperation.deleteMyRecipe.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        myRecipesOperation.deleteMyRecipe.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(r => r._id !== payload);
          state.isRefreshing = false;
          console.log(state.data);
        }
      )
      .addCase(
        myRecipesOperation.addToMyRecipes.fulfilled,
        (state, { payload }) => {
          state.data = [...state.data, payload];
          console.log(state.data);
        }
      ),
});

export default myRecipesSlice.reducer;