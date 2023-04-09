import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_BACK;

export const fetchFavorites = token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`/favorite/`, config).then(({ data }) => {
    return data;
  });
};

export const deleteFavorite = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.delete(`/favorite/del/${id}`, config).then(({ data }) => {
    return data;
  });
};

export const addFavorite = (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  console.log(`/favorite/add/${id}`);
  return axios.put(`/favorite/add/${id}`, {}, config).then(({ data }) => {
    return data;
  });
};
