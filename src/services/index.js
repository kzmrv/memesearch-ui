import axios from 'axios';
import { BE_BASIC_URL } from '../configs';

export default axios.create({
  baseURL: BE_BASIC_URL,
  responseType: 'json',
  headers: {
    common: {
      'Access-Control-Allow-Origin': BE_BASIC_URL,
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
});
