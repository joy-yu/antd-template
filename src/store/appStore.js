import { observable, action, computed, runInAction } from "mobx"
import userModel from '~/api'

class appStore {

  @observable loginInfo = {}
  @observable isLogin = false
  /*
  @computed get unfinishedTodoCount() {
      return this.todos.filter(todo => !todo.finished).length;
  }
  */
  @action loginSubmit = async params => {
    try {
      const data = await userModel.getList(params)
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
}

export default new appStore()
