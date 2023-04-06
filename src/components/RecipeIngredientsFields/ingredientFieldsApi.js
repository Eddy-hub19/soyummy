import axios from 'axios';

const BASE_URL = 'https://determined-ruby-nematode.cyclic.app/';

export const ingradientFieldsApi = async () => {
  axios.get(`${BASE_URL}ingredients/list`).then(({ data }) => {
    return console.log(data);
  });
};
