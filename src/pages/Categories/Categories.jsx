import { CategoryList } from 'components/CategoryList/CategoryList';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { axiosInstance } from 'service/API/axios';

const Categories = () => {
  console.log(axiosInstance.defaults.headers.common.Authorization);
  return (
  
      <Container>
        <Title>Categories</Title>
        <CategoryList />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
  );
};

export default Categories;
