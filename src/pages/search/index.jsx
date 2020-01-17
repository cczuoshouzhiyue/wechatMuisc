import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { Footer } from '../../components/footer/index'
import './index.scss'


@observer
class Search extends Component {

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
    return (
      <View className='index'>
        <Text>搜索列表</Text>
        <Footer />
      </View>
    )
  }
}

export default Search
