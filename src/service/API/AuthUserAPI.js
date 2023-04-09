import { axiosInstance } from 'service/API/axios';

const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = '';
  },
};

export async function postUser(credentials) {
  const { data } = await axiosInstance.post(`/auth/register`, credentials);
  token.set(data.token);
  return data;
}

export async function logIn(credentials) {
  const { data } = await axiosInstance.post(`/auth/login`, credentials);
  token.set(data.token);
  return data;
}

export async function logOut() {
  await axiosInstance.post(`/auth/logout`);
  token.unset();
}

export async function fetchCurrentUser(persisterToken) {
  token.set(persisterToken);
  const { data } = await axiosInstance.get(`/auth/current`);
  return data;
}
