//From Egghead Tutorial Vids 10-13- Learning about React component lifecycle
import React from 'react';
import ReactDOM from 'react-dom';

//Calls the ensued procedures
class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }

  //Registers user input
  update() {
    this.setState({val: this.state.val +1})
  }

  //Signifier for successful app execution
  componentWillMount(){
    console.log('componentWillMount')
   /* this.setState({m:2})*/
  }


  //Relays program to web page
  render(){
    console.log('render');
    return <button 
    style={{
      height: '40px',
      width: '40px',
    }}
    onClick={this.update}>{this.state.val}</button>
    /* * this.state.m}*/ //Put next to {this.state.val} above
  }

  componentDidMount(){
    console.log('componentDidMount');
    /*this.inc = setInterval(this.update,500)*/
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
   /* clearInterval(this.inc)*/()
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;