import { observable, action  } from 'mobx';
import { singerIntanceApi as api } from '../api/index';
import { createSong } from '../class/song';
const HOT_SINGER_LEN = 10;
const HOT_NAME = '热门';
const singerParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp',
  channel: 'singer',
  page: 'list',
  key: 'all_all_all',
  pagesize: 100,
  pagenum: 1,
  hostUin: 0,
  needNewCode: 0,
  platform: 'yqq'
};

const singerDetailParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp',
  hostUin: 0,
  needNewCode: 0,
  platform: 'yqq',
  order: 'listen',
  begin: 0,
  num: 80,
  songstatus: 1,
};


const singerStore = observable({
  singerList: [],
  currentSelectSinger: {},
  songList: [],
  getSingerListIntance () {
    api.singerList(singerParams).then( result => {
      this.singerList = dealSIngerListData(result);
    });
  },
  setCurrentSelectSinger (singerObj) {
      this.currentSelectSinger = singerObj
  },
  getSingerDetailData (singerId) {
     const params = Object.assign(singerDetailParams, {
       singermid: singerId
     });
    api.getSingerDetail(params).then(reuslt => {
        this.songList = detailData(reuslt.list)
    })
  }
});






const dealSIngerListData = (result) => {
  let mapList = {
    hot: {
      title: HOT_NAME,
      list: []
    }
  };
  result.list.map((item, index) => {
    if (index < HOT_SINGER_LEN) {
      mapList.hot.list.push(new Singer({
        id: item.Fsinger_mid,
        name: item.Fsinger_name
      }))
    }
    let findex = item.Findex;
    if (!mapList[findex]) {
      mapList[findex] = {
        title: findex,
        list: []
      }
    }
    mapList[findex].list.push(new Singer({
      id: item.Fsinger_mid,
      name: item.Fsinger_name
    }))
  });
  let hot = [];
  let ret = [];
  for (let key in mapList) {
    let item = mapList[key]
    if (item.title.match(/[a-zA-Z]/)) {
      ret.push(item)
    }
    if (item.title === HOT_NAME) {
      hot.push(item)
    }
  }
  ret.sort((a, b) => {
    return a.title.charCodeAt() - b.title.charCodeAt()
  });
  return  hot.concat(ret)
}


const detailData =  (list) => {
  const songList = []
  list.map((item) => {
    let {musicData} = item;
    songList.push(createSong(musicData))
  });
  return songList
};


class Singer {
  constructor ({id, name}) {
    this.id = id;
    this.name = name;
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}


export default singerStore
