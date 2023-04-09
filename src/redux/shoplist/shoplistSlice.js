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
          console.log(state.data);
        }
      )
      .addCase(shoppingListOperation.deleteShoppingListItem.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(
        shoppingListOperation.deleteShoppingListItem.fulfilled,
        (state, { payload }) => {
          state.data = state.data.filter(r => r._id !== payload);
          state.isRefreshing = false;
          console.log(state.data);
        }
      )
      .addCase(
        shoppingListOperation.addShoppingListItem.fulfilled,
        (state, { payload }) => {
          state.data = [...state.data, payload];
          console.log(state.data);
        }
      ),
});

export default shoppingListSlice.reducer;
