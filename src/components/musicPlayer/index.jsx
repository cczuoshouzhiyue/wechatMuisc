import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { Footer } from '../../components/footer/index'
import './index.scss'

@inject('musicPlayStore')
@observer
class MusicPlayer extends Component {

  config = {
    navigationBarTitleText: '歌手列表'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const { musicPlayStore } = this.props;
    if (!musicPlayStore.playing) {
      return null
    }

    return (
     <View>

       我的播放页面
     </View>
  )
  }
}

export default MusicPlayer
