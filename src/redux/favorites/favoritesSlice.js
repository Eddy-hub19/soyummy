import { createSlice } from '@reduxjs/toolkit';
import * as favoritesOperation from '../favorites/favoritesOperation';

const initialState = { data: [] };

const Favorites = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(
        favoritesOperation.fetchFavorites.fulfilled,
        (state, { payload }) => {
          state.data = payload;
          console.log(state.data);
        }
      )
      .addCase(
        favoritesOperation.deleteFavorite.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(id => id._id !== payload);
          console.log(state.data);
        }
      )
      .addCase(
        favoritesOperation.addFavorite.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(id => id._id !== payload);
          console.log(state.data);
        }
      ),
});

export default Favorites.reducer;
