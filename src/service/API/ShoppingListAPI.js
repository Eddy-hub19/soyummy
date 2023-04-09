import axios from 'axios';

const BASE_URL_BACKEND = 'https://determined-ruby-nematode.cyclic.app';
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzE1ODJmNjYyY2NjNmRhMTU2ZTk0YiIsImlhdCI6MTY4MDk1NTQ1MSwiZXhwIjoxNjgxMjA3NDUxfQ.F1fqRkdltGhDXSHU-hPRvZz16ZQIZVP3Ru-GWe3uOLw';

axios.defaults.baseURL = BASE_URL_BACKEND;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// export const addShoppingListAPI = body => {
//   return axios.post('/shopping-list', body).then(({ data }) => {
//     return data;
//   });
// };

export const getShoppingListAPI = () => {
  return axios.get('/shopping-list').then(({ data }) => {
    return data;
  });
};

export const removeShoppingListAPI = id => {
  return axios.delete(`/shopping-list/${id}`).then(({ data }) => {
    return data;
  });
};
