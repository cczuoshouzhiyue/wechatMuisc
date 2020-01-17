import axios from 'axios';
import qs from 'qs';
import Taro from '@tarojs/taro'
import mpAdapter from 'axios-miniprogram-adapter'
import {TIMEOUT, PREFIX} from '../config/request';

const api = axios.create({
  timeout: TIMEOUT,
  baseURL: PREFIX,
  withCredentials: true,
  responseType: 'json',
  header: {
    'content-type': 'application/json',
  },
});

api.defaults.adapter = mpAdapter

const responseFn  =(result) => {
  if (result&& result.data.code === 0) {
    return result.data.data;
  }
  return null;
};

export const createApi =() => {
  return {
    get(url, param, config) {
      return get(`${PREFIX}${url}?${qs.stringify(param)}`).then(responseFn);
    },
    post(url, param, config) {
      return api.post(`${PREFIX}${url}`, param, config).then(responseFn);
    }
  };
};



function get(url, data) {
  console.log(url)
  return Taro.request({url, data, method: 'GET'})
}
