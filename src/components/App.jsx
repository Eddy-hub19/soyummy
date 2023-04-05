import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// import { PublicRoute } from 'service/routes';
// import { PrivateRoute } from 'service/routes';
import { ThemeProvider } from 'styled-components';

// import Main from 'pages/Main/Main';
// import Register from 'pages/Register/Register';
// import Signin from 'pages/Signin/Signin';
// import Subscribe from 'pages/Subscribe/Subscribe';
// import SharedLayout from './SharedLayout/SharedLayout';
// import AddRecipe from 'pages/AddRecipe/AddRecipe';
// import Error from 'pages/Error/Error';
import { theme } from '../theme/theme';
import UserSharedLayout from './HeaderUserBar/UserSharedLayout';
import { AuthNav } from './AuthNav/AuthNav';
import Register from 'pages/Register/Register';
import SignIn from 'pages/Signin/Signin';


const MainPage = lazy(() =>
  import('pages/MainPage/MainPage').then(module => ({
    default: module.MainPage,
  }))
);
// const Categories = lazy(() => import('pages/Categories/Categories'));
// const CategoriesByName = lazy(() =>
//   import('pages/CategoriesByName/CategoriesByName')
// );
// const MyRecipes = lazy(() => import('pages/MyRecipes/MyRecipes'));
// const Favorites = lazy(() => import('pages/Favorites/Favorites'));
// const ShopingList = lazy(() => import('pages/ShoppingList/ShoppingList'));
// const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
// const Recipe = lazy(() => import('pages/Recipe/Recipe'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route
          path="/"
          element={
            <PublicRoute restricted>
              <Main />
            </PublicRoute>
          }
        /> */}
        <Route
          path="/start"
          element={<AuthNav />}
          restricted
          redirectTo="/main"
        />
        <Route
          path="/register"
          Component={Register}
          restricted
          redirectTo="/main"
        />
        <Route
          path="/signin"
          Component={SignIn}
          restricted
          redirectTo="/main"
        />
        {/* <Route
          path="/confirm-email"
          element={
            <PublicRoute>
              <Subscribe />
            </PublicRoute>
          }
        /> */}
        {/* 
        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        /> */}

        <Route path="/main" element={<MainPage />} />
        <Route path="/my" element={<MyRecipes />} />
        <Route path="/" element={<UserSharedLayout />} />
        {/* <Route path="/signin" element={<AuthNav />} />
        <Route path="/register" element={<AuthNav />} /> */}
      </Routes>

      {/* <Route path="/categories" element={<Categories />}>
        <Route path=":categoryName" element={<CategoriesByName />} />
      </Route>
      <Route path="/add" element={<AddRecipe />} /> */}
      <Route path="/my" element={<MyRecipes />} />
      {/* <Route path="/favorite" element={<Favorites />} />
      <Route path="/shopping-list" element={<ShopingList />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/recipe/:recipeId" element={<Recipe />} />
      <Route path="*" element={<Error />} />  */}
    </ThemeProvider>
  );
};
