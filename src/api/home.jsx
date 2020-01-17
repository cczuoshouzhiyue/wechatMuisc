export default function (api) {
  return {
    apiTest: query => api.get('/abc', query),

    getDiscList: query => api.get('/getDiscList', query),

  };
}
