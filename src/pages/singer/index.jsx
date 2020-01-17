import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Text,  ScrollView, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Footer  from '../../components/footer/index'
import SingerListView from '../../components/singerList/index'
import './index.scss'

@inject('singerStore')
@observer
class Singer extends PureComponent {

  config = {
    navigationBarTitleText: '歌手列表'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    const { singerStore } = this.props;
    singerStore.getSingerListIntance();
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  selectItem =  (value) => {
    const { singerStore } = this.props;
    const url = '/pages/singerDetail/index';
    singerStore.setCurrentSelectSinger(value);
    console.log(value);
    Taro.navigateTo({
      url: url,
    })
  };

  render () {
    const { singerStore } = this.props;
    return (
      <View className='singer'>
        <SingerListView list={singerStore.singerList} onSelectItem={this.selectItem} />
        <Footer />
      </View>
    )
  }
}

export default Singer
