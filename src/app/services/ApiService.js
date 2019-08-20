import axios from 'axios';

const HOST = 'https://jsonplaceholder.typicode.com';

const ApiService = axios.create({
  baseURL: HOST
});

export default ApiService;