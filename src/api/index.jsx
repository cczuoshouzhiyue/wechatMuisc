import {createApi} from '../util/https';
import homePage from './home';
import singerIntance from './singer'
const api = createApi();

const homePageApi = homePage(api);
const singerIntanceApi = singerIntance(api);

export {
  homePageApi,
  singerIntanceApi
};
