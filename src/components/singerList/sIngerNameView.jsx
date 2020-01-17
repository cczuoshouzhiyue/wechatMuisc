import Taro, { Component, PureComponent } from '@tarojs/taro'
import { View, Button, Text,  ScrollView, Image } from '@tarojs/components'
import './sIngerNameView.scss'

class SIngerNameView extends  PureComponent {

  componentWillMount () { }

  componentWillReact () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  selectItem = value => {
     this.props.onSelectItem && this.props.onSelectItem(value);
  };

  render () {
    const { list } = this.props;
    const singerNameListNode = list.map(item => {
      return (<View className='child_view' onClick={this.selectItem.bind(this, item)}>
           <Image class="avatar" src={item.avatar} />
            <Text class="name">{item.name}</Text>
        </View>)
    });
    return (
      <View className='list'>{singerNameListNode}</View>
    )
  }
}

export default  SIngerNameView
