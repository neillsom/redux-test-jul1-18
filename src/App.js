import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from './actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Count is: {this.props.count}</h1>
        <button onClick={() => this.props.dispatch(incrementCounter(1))}>Increment</button>
        <button onClick={() => this.props.dispatch(decrementCounter(1))}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    count: state.counterReducer.count
  };
};

export default connect(mapStateToProps)(App);
