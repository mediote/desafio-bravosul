import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bravosul-app.herokuapp.com',
});

export default api;
