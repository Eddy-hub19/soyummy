import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

export const PrivateRoute = ({ children }) => {
  const isUserFetching = useSelector(authSelectors.getIsRefreshing);
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  return isLogin ? isUserFetching ? <Loader /> : children : <Navigate to="/welcome" />;
};
