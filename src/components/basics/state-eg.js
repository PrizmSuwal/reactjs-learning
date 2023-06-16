import React, { Component } from 'react';

class StateExample extends Component {
  state = {
    isLoading: false,
    userName: 'John',
  };
  render() {
    return (
      <div>
        <h1> State Example</h1>
        <h1> {this.state.userName}</h1>
        <button> {this.state.isLoading ? 'Button' : 'Loading...'}</button>
      </div>
    );
  }
}
export default StateExample;
