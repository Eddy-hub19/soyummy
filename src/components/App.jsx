import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import {theme as lightMode, darkTheme as darkMode  } from '../theme/theme';
import { PrivateRoute } from 'service/routes';
import { RestrictedRoute } from 'service/routes';

// import Main from 'pages/Main/Main';
// import Subscribe from 'pages/Subscribe/Subscribe';
// import Error from 'pages/Error/Error';
// import UserSharedLayout from './HeaderUserBar/UserSharedLayout';
import SharedLayout from './SharedLayout/SharedLayout';
import AddRecipe from 'pages/AddRecipe/AddRecipe';
import { AuthNav } from './AuthNav/AuthNav';
import Register from 'pages/Register/Register';
import SignIn from 'pages/Signin/Signin';
import Categories from 'pages/Categories/Categories';
import MyRecipes from 'pages/MyRecipes/MyRecipes';
import Favorites from 'pages/Favorites/Favorites';
import CategoriesByName from 'pages/CategoriesByName/CategoriesByName';
import { useSelector } from 'react-redux';
import { getMode } from 'redux/themeR/themeSelector';

const MainPage = lazy(() =>
  import('pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  }))
);

const ShopingList = lazy(() => import('pages/ShoppingList/ShoppingList'));
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));
const Recipe = lazy(() => import('../pages/RecipePage/RecipePage'));
// const MyRecipes = lazy(() => import('pages/MyRecipes/MyRecipes'));
// const Favorites = lazy(() => import('pages/Favorites/Favorites'));
//============================================================================//
export const App = () => {

  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode;
  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route
          path="/startPage"
          element={<RestrictedRoute redirectTo="/main" component={AuthNav} />}
        />

        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/main" component={Register} />}
        />

        <Route
          path="/signin"
          element={<RestrictedRoute redirectTo="/main" component={SignIn} />}
        />
        {/* <Route
          path="/confirm-email"
          element={
            <PublicRoute>
              <Subscribe />
            </PublicRoute>
          }
        /> */}
        <Route
          path="/"
          element={
            <PrivateRoute
              redirectTo="/startPage"
              component={SharedLayout}
            ></PrivateRoute>
          }
        >
          <Route index element={<MainPage />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/my" element={<MyRecipes />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/categories" element={<Categories />}>
            <Route path=":categoryName" element={<CategoriesByName />} />
          </Route>

          <Route path="/shopping-list" element={<ShopingList />} />
          <Route path="/recipes/:recipeId" element={<Recipe />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
        {/* <Route path="/my" element={<MyRecipes />} /> */}
        {/* <Route path="/" element={<UserSharedLayout />} /> */}
        {/* <Route path="/signin" element={<AuthNav />} />
        <Route path="/register" element={<AuthNav />} /> */}
        {/* <Route path="/categories" element={<Categories />}>
        <Route path=":categoryName" element={<CategoriesByName />} />
        </Route>
        <Route path="/add" element={<AddRecipe />} /> */}
        {/* <Route path="/recipe/:recipeId" element={<Recipe />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </ThemeProvider>
  );
};
