import React, { Component } from 'react'
import {Button} from 'antd'
import {userModel} from '~/api'

class Home extends Component {
  constructor(args) {
    super(...args)
    this.state = {
      text: '662226',
      current: 'mail'
    }
  }
  handleClick = (e) => {
    userModel.getList().then(res => {})
    this.setState({
      text: '233'
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary">Button</Button>
          <h1 className="App-title">Welcome to React</h1>
          <p onClick={this.handleClick}>{this.state.text}</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home
