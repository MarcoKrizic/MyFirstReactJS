//First few Egghead tutorial videos
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: "This is the state text",
    }
  }

  update(e) {
    this.setState({txt: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    );
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />


export default App;
