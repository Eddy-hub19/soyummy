import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";

export const RestrictedRoute = ({ children, restricted = false, redirectTo = "/main" }) => {
  const isLogin = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLogin && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
