import { HeaderAssembly } from '../HeaderAssembly/HeaderAssembly';
import { FooterAssembly } from '../FooterAssembly/FooterAssembly';
import { Loader } from '../Loader/Loader';
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
