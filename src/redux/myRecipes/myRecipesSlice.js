import { createSlice } from '@reduxjs/toolkit';
import * as myRecipesOperation from '../myRecipes/myRecipesOperation';

const initialState = { data: [] };

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(
        myRecipesOperation.fetchMyRecipes.fulfilled,
        (state, { payload }) => {
          state.data = payload;
          console.log(state.data);
        }
      )
      .addCase(
        myRecipesOperation.deleteMyRecipe.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(r => r._id !== payload);
          console.log(state.data);
        }
      ),
  // .addCase(
  //   myRecipesOperation.addToMyRecipes.fulfilled,
  //   (state, { payload }) => {
  //     state.data = state.data.filter(id => id._id !== payload);
  //     console.log(state.data);
  //   }
  // ),
});

export default myRecipesSlice.reducer;
