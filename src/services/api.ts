import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/api_gomarketplace',
});

export default api;
