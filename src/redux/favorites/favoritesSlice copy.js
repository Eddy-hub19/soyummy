import { createSlice } from '@reduxjs/toolkit';
import * as favoritesOperation from '../favorites/favoritesOperation';

const initialState = [];

const Favorites = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(
        favoritesOperation.fetchFavorites.fulfilled,
        (state, { payload }) => {
          state = payload;
        }
      )
      .addCase(
        favoritesOperation.deleteFavorite.fulfilled,
        (state, { payload }) => {
          state = state.filter(id => id !== payload);
        }
      ),
});

export default Favorites.reducer;
