import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
