import Taro, { PureComponent } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { Footer } from '../../components/footer/index'
import './index.scss'

const getDesc =(song) => {
  return `${song.singer}·${song.album}`
};

class SongList extends PureComponent {


  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  selectSong = (item, index) => {
    this.props.onSelectSong && this.props.onSelectSong(item, index)
  };

  render () {
    const { list } = this.props;
    const listNode = list.map( (item, index) => {
      return ( <View className='item'>
        <View className='content' onClick={this.selectSong.bind(this, item, index)}>
          <Text className="name_h2">{item.name}</Text>
          <Text className="desc_p">{getDesc(item)}</Text>
        </View>

      </View>)
    })
    return (
      <View>
        {listNode}
      </View>
    )
  }
}

export default SongList
