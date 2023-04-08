import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authSlice from './auth/authSlice';
import favoritesSlice from './favorites/favoritesSlice';
import myRecipesSlice from './myRecipes/myRecipesSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  // whitelist: ['token'],
};

const myRecipesConfig = {
  key: 'myRecipes',
  storage,
  // whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    favorites: persistReducer(favoritesPersistConfig, favoritesSlice),
    myRecipes: persistReducer(myRecipesConfig, myRecipesSlice),
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
