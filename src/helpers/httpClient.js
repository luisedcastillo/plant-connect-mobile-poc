import axios from 'axios';

const client = axios.create({
  baseURL: 'https://plantconnect-webapi-p.azurewebsites.net/api',
  headers: { 'content-type': 'application/json' },
});

client.interceptors.request.use(
  config => config,
  error => {
    console.warn('Failed to make request with error:', error);
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  response => response,
  error => {
    if (!error.response) {
      throw new Error("Connection Error, something were wrong");
    }

    console.warn('Request got response with error:', error);

    return Promise.reject(error);
  }
);

export default client;