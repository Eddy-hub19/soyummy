import { createSlice } from '@reduxjs/toolkit';
import * as shoppingListOperation from '../shoplist/shoplistOperation';

const initialState = { data: [], isRefreshing: false };

const shoppingListSlice = createSlice({
  name: 'shopping-list',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(shoppingListOperation.fetchShoppingList.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        shoppingListOperation.fetchShoppingList.fulfilled,
        (state, { payload }) => {
          state.data = payload;
          state.isRefreshing = false;
        }
      )
      .addCase(shoppingListOperation.deleteShoppingListItem.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        shoppingListOperation.deleteShoppingListItem.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(i => i._id !== payload);
          state.isRefreshing = false;
        }
      )
      .addCase(
        shoppingListOperation.addShoppingListItem.fulfilled,
        (state, { payload }) => {
          state.data = [...state.data, payload];
        }
      )
});

export default shoppingListSlice.reducer;
