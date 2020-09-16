import axios from 'axios';

let accessToken = JSON.parse(localStorage.getItem('user'));

export default axios.create({
  baseURL: `${process.env.VUE_APP_ROOT_API}`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
});
