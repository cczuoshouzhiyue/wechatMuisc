import Taro, { Component, PureComponent } from '@tarojs/taro'
import { View, Button, Text,  ScrollView, Image } from '@tarojs/components'
import SIngerNameView from './sIngerNameView'
import './index.scss'

class SingerListView extends PureComponent {

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

    const renderChildNode = (list) => {
      return list.map(child => {
        return <View>
          <Image src={child.avatar} className='avatar'/>
          <Text className='name'>{child.name}</Text>
        </View>
      });
    };

    const liNode = list.map( item => {
        return ( <View className='parent_view'>
          <Text className='title_h2'>{item.title}</Text>
          <SIngerNameView list={item.list} onSelectItem={this.selectItem}/>
        </View>)
      });

    return (
      <ScrollView className='list-view' scrollY={true}>
        <View className='title'>
          {liNode}
        </View>
      </ScrollView>
    )
  }
}

export default SingerListView



