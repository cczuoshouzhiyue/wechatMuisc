import { observable } from 'mobx'

const menuStore = observable({
  currentMenu: 'index',
  setCurrentMenu (name) {
      this.currentMenu = name
  }
})
export default menuStore