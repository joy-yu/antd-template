import { observable, action, computed, runInAction } from "mobx"
import userModel from '~/api'

class appStore {

  @observable loginInfo
  @observable isLogin
  @observable loading

  constructor() {
    this.loginInfo = {
      name: 'sundaypig'
    }
    this.isLogin = false
    this.loading = false
  }

  @action loginSubmit = async params => {
    try {
      const data = await userModel(params)
      runInAction(() => {
        this.isLogin = true
      })
    }
    catch (err) {
      console.log(err)
    }
  }

  @action.bound logout() {
    this.isLogin = false
  }

  @action showLoading() {
    this.loading = true
    console.log('1111111111111111111')
  }

  @action hideLoading() {
    this.loading = false
    console.log('00000000000000000000')
  }

}

export default new appStore()
