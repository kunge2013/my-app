import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*********
npm install jquery -S
***************/
import jQuery from 'jquery'
class ReactAjax extends Component {
  constructor() {
    super();
    //react的新写法
    this.state = {
      lastGistUrl: '',
      username:''
    };
  }

  render() {

    return  (
          <div>
             {this.state.username} 用户最新的 Gist 共享地址： {this.state.lastGistUrl} <br/>
            <a href={this.props.source}>{this.props.source}</a>
          </div>
        );
  }
  //ajax 请求完成后进行数据绑定
  componentDidMount(){
    this.serverRequest = jQuery.get(this.props.source, function (result)
     {
       var lastGist = result[0];
       console.log({"ajax返回数据":lastGist});
         // this.state.lastGistUrl=lastGist.html_url;
         // this.state.username = lastGist.owner.login;
        this.setState({
         username: lastGist.owner.login,
         lastGistUrl: lastGist.html_url
        });
     }.bind(this));
  }

  componentWillUnmount()
  {
    console.log('componentWillUnmount');
    this.serverRequest.abort()
  }
}
export default ReactAjax;
