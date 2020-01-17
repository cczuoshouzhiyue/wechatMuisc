import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Footer from '../../components/footer/index'
import homeStore from "../../store/homeStore"
import './index.scss'

@inject('homeStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '热门歌单'
  }

  componentWillMount () {
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount = () => {
    const { homeStore } = this.props;
    homeStore.getTestIntance();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const {homeStore: { recList}} = this.props;
    const scrollList = recList.map(item => {
      return (<View className='item'>
          <View className="img">
            <Image src={item.imgurl} alt="" />
          </View>
          <View className="content">
            <Text className='h2'>{item.creator.name}</Text>
            <Text className='p'>{item.dissname}</Text>
          </View>
        </View>)
    });
    return (
      <View className='index'>
        <View className='header'>
           <Text className='title'>热门歌单</Text>
        </View>
        <ScrollView className='list' scrollY={true}>
          {scrollList}
        </ScrollView>
        <Footer/>
      </View>
    )
  }
}

export default Index
