import Taro, { Component, PureComponent } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.scss'

@inject('menuStore')
@observer
class Footer extends PureComponent {

  componentWillMount () { }

  componentWillReact () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  goRoute = (routeName) => {
    const { menuStore } = this.props
    const url = '/pages/' +  routeName + '/index';
    menuStore.setCurrentMenu(routeName)
    Taro.navigateTo({
      url: url
    })
  };

  render () {
    const { menuStore: {currentMenu} } = this.props
    return (
      <View className='index'>
         <Text className={['item', currentMenu === 'index' ? 'active': ''].join(' ')} onClick={this.goRoute.bind(this, 'index')}>首页</Text>
         <Text className={['item', currentMenu === 'singer' ? 'active': ''].join(' ')} onClick={this.goRoute.bind(this, 'singer')}>歌手</Text>
         <Text className={['item', currentMenu === 'search' ? 'active': ''].join(' ')} onClick={this.goRoute.bind(this, 'search')}>搜索</Text>
         <Text className={['item', currentMenu === 'order' ? 'active': ''].join(' ')} onClick={this.goRoute.bind(this, 'order')}>我的</Text>
      </View>
    )
  }
}

export default Footer
