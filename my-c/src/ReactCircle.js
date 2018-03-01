import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ReactCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    };
    console.log('constructor');
  }

  componentWillMount(){
    console.log('在render 之前调用 .....componentWillMount');
  }
  componentDidMount(){
    console.log('需要远程加载数据  .....componentDidMount');
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render() {
      console.log('render');
    return <h1>生命周期</h1>
  }


}

export default ReactCircle;
