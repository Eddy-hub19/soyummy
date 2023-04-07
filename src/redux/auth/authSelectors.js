const getIsLoggedIn = state => state.auth.isloggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUserEmail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
};
export default authSelectors;
