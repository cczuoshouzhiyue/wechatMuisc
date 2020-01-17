import { observable, action  } from 'mobx';
import { homePageApi as api } from '../api/index';
import jsonp from '../util/jsonp'

const homeStore = observable({
  abc: '11111111',
  recList: [],
  getTestIntance () {
    const params = {
      g_tk: 1928093487,
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    };
    api.getDiscList(params).then( result => {
     this.recList = result.list
    });
  }
});

export default homeStore
