import { axiosInstance } from 'service/API/axios';

export const fetchFavorites = token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance.get(`/favorite/`, config).then(({ data }) => {
    return data;
  });
};

export const deleteFavorite = (token, id) => {
  console.log(token, id);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axiosInstance
    .delete(`/favorite/del/${id}`, config)
    .then(({ data }) => {
      return data;
    });
};

export const addFavorite = (token, id) => {
  console.log(token, id);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // return axios.post(`/favorite/add/${id}`, config).then(({ data }) => {
  //   return data;
  // });
  console.log(`/favorite/add/${id}`);
  return axiosInstance
    .put(`/favorite/add/${id}`, {}, config)
    .then(({ data }) => {
      return data;
    });
};

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const signUpUserAPI = user => {
//   return axios.post('/auth/signup', user).then(({ data }) => {
//     return data;
//   });
// };

// export const logInUserAPI = user => {
//   return axios.post('/auth/login', user).then(({ data }) => {
//     return data;
//   });
// };

// export const logOutUserAPI = () => {
//   return axios.post('/auth/logout').then(({ data }) => {
//     return data;
//   });
// };

// export const getUserInfoAPI = id => {
//   return axios.get(`/auth/user-data/${id}`).then(({ data }) => {
//     return data;
//   });
// };

// export const updateUserInfoAPI = body => {
//   return axios.patch('/auth/user-data', body).then(({ data }) => {
//     return data;
//   });
// };

// export const getCurrentUserAPI = () => {
//   return axios.get('/auth/user-data').then(({ data }) => {
//     return data;
//   });
// };

// export const subscribeEmail = email => {
//   return axios.post('/auth/user-data/subscribe', email).then(({ data }) => {
//     return data;
//   });
// };

// export const subscribeEmailConfirmation = token => {
//   return axios
//     .get(`auth/user-data/subscribe?token=${token}`)
//     .then(({ data }) => {
//       return data;
//     });
// };

// export async function postUser(credentials) {
//   const { data } = await axios.post(`/auth/register`, credentials);
//   token.set(data.token);
//   return data;
// }

// export async function logIn(credentials) {
//   const { data } = await axios.post(`/auth/login`, credentials);
//   token.set(data.token);
//   return data;
// }

// export async function logOut() {
//   await axios.post(`/auth/logout`);
//   token.unset();
// }

// export async function fetchCurrentUser(persisterToken) {
//   token.set(persisterToken);
//   const { data } = await axios.get(`/auth/current`);
//   return data;
// }
