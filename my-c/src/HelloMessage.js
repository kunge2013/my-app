import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloMessage extends Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}
export default HelloMessage;
