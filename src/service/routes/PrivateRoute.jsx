import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const isRefreshing = useSelector(authSelectors.getIsRefreshing);
//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
// };

export const PrivateRoute = ({ children }) => {
  const isUserFetching = useSelector(authSelectors.getIsRefreshing);
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return isLogin ? (
    isUserFetching ? (
      <Loader />
    ) : (
      children
    )
  ) : (
    <Navigate to="/welcome" />
  );
};
