import axios from 'axios';

const baseURL = process.env.REACT_APP_URL || 'http://localhost:3000/api';

export const Api = axios.create({ baseURL });
