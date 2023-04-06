import axios from 'axios';

const BASE_URL_BACKEND = "https://determined-ruby-nematode.cyclic.app";
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjlkM2JjZjJkNTM1MjI5MWI1OWUxYyIsImlhdCI6MTY4MDc2NjQyNCwiZXhwIjoxNjgwODM4NDI0fQ.Pcfk7B0N7f6WHpxP8SIGfiW8hFPrs8u9EtYx-bAia8k";
// axios.defaults.baseURL = process.env.BASE_URL_BACKEND;
axios.defaults.baseURL = BASE_URL_BACKEND;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getRecipeById = async id => {
    const response = await axios.get(`/recipes/${id}`);
    return response.data;
};
