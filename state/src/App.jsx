import React, { Component } from 'react';

class App extends Component {
  constructor()
  {
  super()
    this.state={
      username:"raj"
  }}
  render() {
    return (
      <div>
        <h2>{this.state.username}</h2>
      </div>
    );
  }}

export default App;
