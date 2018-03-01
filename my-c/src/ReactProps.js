import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class ReactProps extends Component {
  //组件属性
  render(){
      this.state=0;
      this.clicount=0;
      console.log({"这是一个props":this.props});
      console.log({"这是一个state":this.state});
      return (<h1 onClick = {this.handleClick}>Hello {this.props.name}</h1>)
  }
  //自定义绑定相关事件
  handleClick = () =>
  {
    this.clicount++;
    console.log('点击次数'+this.clicount);
  }

}

//属性必填校验
ReactProps.propTypes ={
  // name: React.PropTypes.string.isRequired
};
export default ReactProps;
