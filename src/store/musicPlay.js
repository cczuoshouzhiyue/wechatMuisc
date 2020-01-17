import { observable, action  } from 'mobx';
const musicPlayStore = observable({
  playing: false,
  fullScreen: false,
});

export default musicPlayStore
