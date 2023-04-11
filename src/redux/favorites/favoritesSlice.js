import { createSlice } from '@reduxjs/toolkit';
import * as favoritesOperation from '../favorites/favoritesOperation';

const initialState = { data: [], isRefreshing: false };

const Favorites = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(favoritesOperation.fetchFavorites.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        favoritesOperation.fetchFavorites.fulfilled,
        (state, { payload }) => {
          state.data = payload;
          state.isRefreshing = false;
        }
      )
      .addCase(favoritesOperation.deleteFavorite.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        favoritesOperation.deleteFavorite.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(id => id._id !== payload);
          state.isRefreshing = false;
        }
      )
      .addCase(
        favoritesOperation.addFavorite.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(id => id._id !== payload);
        }
      )
      .addDefaultCase(state => {
        state.isRefreshing = false;
      }),
});

export default Favorites.reducer;
