export default function (api) {
  return {
    singerList: query => api.get('/singerList', query),

    getSingerDetail: query => api.get('/getSingerDetail', query),

    getLyric: query =>api.get('/getLyric', query),

    getMusic: query =>api.get('/getMusic', query)
  };
}
