import { FooterAssembly } from 'components/FooterAssembly/FooterAssembly';
import { HeaderAssembly } from 'components/HeaderAssembly/HeaderAssembly';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { SharedLayoutConteiner } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <SharedLayoutConteiner>
      <HeaderAssembly />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <FooterAssembly />
    </SharedLayoutConteiner>
  );
};

export default SharedLayout;
