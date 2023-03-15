import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  handleIncrement=()=>{
    this.setState({count:this.state.count+1})
  }
  handledecrement=()=>{
    this.setState({count:this.state.count-1})
  }
  handleReset=()=>{
    this.setState({count:0})
  }
  render() {
    return (
      <div>
        <h1 >{this.state.count}</h1>
    <button className='btn' onClick={this.handleIncrement}>+increment</button>
    <button className='btn' onClick={this.handledecrement}>+decrement</button>
    <button  className='btn'onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;
