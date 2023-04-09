import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import { ThemeProvider } from 'styled-components';
import { theme as lightMode, darkTheme as darkMode } from '../theme/theme';
import { PrivateRoute } from 'service/routes';
import { RestrictedRoute } from 'service/routes';

import { ThemeProvider } from 'styled-components';

// import Main from 'pages/Main/Main';
// import Subscribe from 'pages/Subscribe/Subscribe';
import SharedLayout from './SharedLayout/SharedLayout';
import AddRecipe from 'pages/AddRecipe/AddRecipe';
// import Error from 'pages/Error/Error';
import { theme } from '../theme/theme';
// import UserSharedLayout from './HeaderUserBar/UserSharedLayout';
import { AuthNav } from './AuthNav/AuthNav';
import Register from 'pages/Register/Register';
import SignIn from 'pages/Signin/Signin';
import MyRecipes from 'pages/MyRecipes/MyRecipes';
import Favorites from 'pages/Favorites/Favorites';
import { useSelector } from 'react-redux';
import { getMode } from 'redux/themeR/themeSelector';
import { GlobalStyle } from './App.styled';

const MainPage = lazy(() =>
  import('pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  }))
);

const ShopingList = lazy(() => import('pages/ShoppingList/ShoppingList'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage/SearchPage'));
const Recipe = lazy(() => import('../pages/RecipePage/RecipePage'));
const Categories = lazy(() => import('pages/Categories/Categories'));
const CategoriesByName = lazy(() =>
  import('pages/CategoriesByName/CategoriesByName')
);
// const MyRecipes = lazy(() => import('pages/MyRecipes/MyRecipes'));
// const Favorites = lazy(() => import('pages/Favorites/Favorites'));
// const ShopingList = lazy(() => import('pages/ShoppingList/ShoppingList'));
// const SearchPage = lazy(() =>
//   import('../pages/SearchPage/SearchPage/SearchPage')
// );
// const Recipe = lazy(() => import('../pages/RecipePage/RecipePage'));

export const App = () => {
  const { mode } = useSelector(getMode);
  const themeMode = mode === 'light' ? lightMode : darkMode;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PublicRoute restricted>
              <Main />
            </PublicRoute>
          }
        /> */}
        {/* <Route
          path="/start"
          element={<AuthNav />}
          restricted
          redirectTo="/main"
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={Register} redirectTo="/main" />}
        />
        <Route
          path="/signin"
          Component={SignIn}
          restricted
          redirectTo="/main"
        /> */}
        {/* <Route
          path="/confirm-email"
          element={
            <PublicRoute>
              <Subscribe />
            </PublicRoute>
          }
        /> */}

        {/* <Route
          path="/"
          element={
            // <PrivateRoute>
            <SharedLayout />
            // </PrivateRoute>
          }
        > */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/my" element={<MyRecipes />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/categories" element={<Categories />}>
          {/* <Route path=":categoryName" element={<CategoriesByName />} />
          <Route path="/shopping-list" element={<ShopingList />} />
          <Route path="/recipes/:recipeId" element={<Recipe />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/main" element={<MainPage />} /> */}
        </Route>

        {/* <Route path="/shopping-list" element={<ShopingList />} />
          <Route path="/recipes/:recipeId" element={<Recipe />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/main" element={<MainPage />} /> */}

        {/* <Route path="*" element={<MainPage />} /> */}
        {/* </Route> */}

        {/* <Route path="/my" element={<MyRecipes />} /> */}

        {/* <Route path="/" element={<UserSharedLayout />} /> */}
        {/* <Route path="/signin" element={<AuthNav />} />
        <Route path="/register" element={<AuthNav />} /> */}
        {/* <Route path="/categories" element={<Categories />}>
        <Route path=":categoryName" element={<CategoriesByName />} />
        </Route>
        <Route path="/add" element={<AddRecipe />} /> */}
        {/* <Route path="/favorite" element={<Favorites />} /> */}
        {/* <Route path="/recipe/:recipeId" element={<Recipe />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </ThemeProvider>
  );
};
