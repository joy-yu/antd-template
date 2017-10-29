import React, { Component } from 'react'
import {Button} from 'antd'
import {common} from '~/api'
import {observer} from 'mobx-react';

@observer
class Home extends Component {
  constructor(args) {
    super(...args)
    console.log(this);
    this.state = {
      text: '662226',
      area: []
    }
  }
  handleClick = async () => {
    console.log(this);
    const res = await common.areaList()
    this.setState({
      text: '233',
      area: res.data.data
    })
  }

  toLogin = () => {
    this.props.history.push(`/login`, this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary" onClick={this.toLogin}>Button</Button>
          <h1 className="App-title">Welcome to React</h1>
          <p onClick={this.handleClick}>{this.state.text}</p>
        </header>
        <ul>
          {this.state.area.map(v => <li key={v.id}>{v.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Home
