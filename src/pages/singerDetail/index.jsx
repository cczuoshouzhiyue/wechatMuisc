import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, ScrollView } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import SongList from '../../components/songList'
import './index.scss'
import singerStore from "../../store/homeStore";
import homeStore from "../../store/homeStore";

@inject('singerStore')
@observer
class SingerDetail extends Component {

  config = {
    navigationBarTitleText: '列表页'
  }

  componentWillMount () { }

  componentWillReact () {
  }

  componentDidMount () {
    const { singerStore } = this.props;
    singerStore.getSingerDetailData(singerStore.currentSelectSinger.id);
    Taro.setNavigationBarTitle({
      title: singerStore.currentSelectSinger.name
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  selectSong = (item, index) => {
    console.log(index);
    console.log(item);
  };

  render () {
    const { singerStore } = this.props;
    const bgImage = {
      backgroundImage: 'url(' + singerStore.currentSelectSinger.avatar +')'
    };
    return (
      <View className='singer_detail'>
        <View className='music_list'>
          <View className="bg_image" style={bgImage} ref="bgImage">
          </View>

          <ScrollView className='list' scrollY={true}>
            <SongList list={singerStore.songList} onSelectSong={this.selectSong}/>
          </ScrollView>



        </View>
      </View>
    )
  }
}

export default SingerDetail
