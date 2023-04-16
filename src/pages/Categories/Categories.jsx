import { CategoryList } from "components/CategoryList/CategoryList";
import { Loader } from "components/Loader/Loader";
import { Title } from "components/Title/Title";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CategoriesConteiner } from "./Categories.styled";

const Categories = () => {
  return (
    <CategoriesConteiner>
      <Title>Categories</Title>
      <CategoryList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </CategoriesConteiner>
  );
};

export default Categories;
