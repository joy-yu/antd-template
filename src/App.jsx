import React, { Component } from 'react';
import './App.less';
import logo from '~/assets/logo.png'

class App extends Component {
  constructor(args) {
    super(...args)
    this.state = {
      text: '662226'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p onClick={()=>this.setState({text: 2333})}>{this.state.text}</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
