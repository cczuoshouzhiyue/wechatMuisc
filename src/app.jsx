import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import homeStore from './store/homeStore'
import singerStore from  './store/singerStore'
import menuStore from './store/footer'
import musicPlayStore from './store/musicPlayStore'
import 'taro-ui/dist/style/index.scss'
// eslint-disable-next-line import/first
// import 'taro-ui/dist/style/index.scss'
import './app.scss'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  homeStore,
  menuStore,
  singerStore,
  musicPlayStore
};

class App extends Component {

  // eslint-disable-next-line react/sort-comp
  config = {
    pages: [
      'pages/index/index',
      'pages/singer/index',
      'pages/singerDetail/index',
      'pages/search/index',
      'pages/order/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
