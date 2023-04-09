const getIsLoggedIn = state => state.auth.isloggedIn;
const getIsRefreshing = state => state.auth.isRefreshing;
const getUserEmail = state => state.auth.user.email;
const getUserData = state => state.auth.user;
export const getAvatar = state => state.auth.user.avatar;
export const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getUserData,
};
export default authSelectors;
