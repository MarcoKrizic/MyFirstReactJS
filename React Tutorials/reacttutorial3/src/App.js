//Based on Egghead Tutorial Vid 10 - NOT COMPLETE!
//Should be a way to reference other components, but FOR WHATEVER REASON, IT DOES NOT WORK
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {a:''}
  }

  update(e){
    this.setState({
      a: this.a.value,
      b: this.refs.b.value
    })
  }

  render() {
    return (
      <div>
        <input 
          ref={ node => this.a = node} //Same thing as ref="x"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.a}
        <hr />
        <input 
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
          /> {this.state.b}
      </div>
    );
  }
}

export default App;