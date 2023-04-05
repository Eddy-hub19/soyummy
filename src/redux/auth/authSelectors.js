// --------------- TOKEN -------------
export const getAccessToken = state => state.auth.accessToken;

// ---------------- USER INFO -------------
export const getEmail = state => state.auth.userData.email;
export const getName = state => state.auth.userData.name;
export const getAvatar = state => state.auth.userData.avatar;
export const getToken = state => state.auth.accessToken;

//  --------------- ADDITIONAL ------------
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsUserFetching = state => state.auth.isUserFetching;
