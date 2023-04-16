import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme as lightMode, darkTheme as darkMode } from "../theme/theme";
import { PrivateRoute } from "service/routes";
import { RestrictedRoute } from "service/routes";

import SharedLayout from "./SharedLayout/SharedLayout";
import AddRecipe from "pages/AddRecipe/AddRecipe";
import { AuthNav } from "./AuthNav/AuthNav";
import Register from "pages/Register/Register";
import SignIn from "pages/Signin/Signin";
import { useSelector } from "react-redux";
import { getMode } from "redux/themeR/themeSelector";
import { GlobalStyle } from "./App.styled";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "redux/auth/authOperation";

const MainPage = lazy(() =>
  import("pages/MainPage/MainPage").then((module) => ({
    default: module.MainPage,
  }))
);

const ShopingList = lazy(() => import("pages/ShoppingList/ShoppingList"));
const SearchPage = lazy(() => import("../pages/SearchPage/SearchPage/SearchPage"));
const Recipe = lazy(() => import("../pages/RecipePage/RecipePage"));
const Categories = lazy(() => import("pages/Categories/Categories"));
const CategoriesByName = lazy(() => import("pages/CategoriesByName/CategoriesByName"));
const MyRecipes = lazy(() => import("pages/MyRecipes/MyRecipes"));
const Favorites = lazy(() => import("pages/Favorites/Favorites"));
//============================================================================//
export const App = () => {
  const { mode } = useSelector(getMode);
  const themeMode = mode === "light" ? lightMode : darkMode;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Routes>
        <Route
          path="/welcome"
          element={
            <RestrictedRoute restricted redirectTo="/">
              <AuthNav />
            </RestrictedRoute>
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/signin" restricted>
              <Register />
            </RestrictedRoute>
          }
        />

        <Route
          path="/signin"
          element={
            <RestrictedRoute redirectTo="/" restricted>
              <SignIn />
            </RestrictedRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<MainPage />} />
          <Route path="add" element={<AddRecipe />} />
          <Route path="my" element={<MyRecipes />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="categories" element={<Categories />}>
            <Route path=":categoryName" element={<CategoriesByName />} />
          </Route>

          <Route path="shopping-list" element={<ShopingList />} />
          <Route path="recipes/:recipeId" element={<Recipe />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
