import axios from 'axios';
import { BE_BASIC_URL } from '../configs';

export default axios.create({
  baseURL: BE_BASIC_URL,
  responseType: 'json'
});
