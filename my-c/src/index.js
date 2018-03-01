import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//helloword
import App from './App';
import HelloWord from './HelloWord';
//引用新组件
import HelloMessage from './HelloMessage';
import ReactProps from './ReactProps';
//React的生命周期
import ReactCircle from './ReactCircle';
import ReactAjax from './ReactAjax';
import registerServiceWorker from './registerServiceWorker';
//ReactDOM.render(<App />, document.getElementById('root'));
//支持多个对象导入
// ReactDOM.render(<HelloWord />, document.getElementById('helloworld'));


ReactDOM.render(<App />, document.getElementById('root'));
//支持 运算表达式
ReactDOM.render(
    <div>
      <h1> 参考 <a href =' http://www.runoob.com/react/react-refs.html' >http://www.runoob.com/react/react-refs.html </a>学习</h1>
    </div>
    ,
    document.getElementById('helloworld')
);

//创建新节点
var div = document.createElement('div'),i=1;
div.id='flag';
document.body.appendChild(div);
ReactDOM.render(
    <div>
      <h1>{i == 1 ? 'True!' : 'False'}</h1>
    </div>
    ,
    document.getElementById('flag')
);

//样式管理
var styleDiv = document.createElement('styleDiv');
styleDiv.id='styleDiv';
document.body.appendChild(styleDiv);
var myStyle  = {
  fontSize:100,
  color:'#FF0000'
};
ReactDOM.render(
  <div style={myStyle}>,参考。。。哈哈哈哈哈哈哈哈哈</div>,
  document.getElementById('styleDiv')
);
//react 注释 添加
var zs = document.createElement('zs');
zs.id='zs';
document.body.appendChild(zs);
ReactDOM.render(
  <div>{/*react的注释...*/}</div>,
  document.getElementById('styleDiv')
);

//HTML 标签 vs. React 组件 新版废弃creatClass
//var myele = document.createElement('myele');
//myele.id='myele';
//document.body.appendChild(myele);
//新版废弃creatClass
//var MyComponent = React.createClass({/*...*/});
//var myElement = <MyComponent someProperty={true} />;
//ReactDOM.render(myElement,document.getElementById('myele'));
//HelloWord

var myele = document.createElement('myele');
myele.id='myele';
document.body.appendChild(myele);
ReactDOM.render(<HelloMessage name='参考进行学习:'/>,document.getElementById('myele'));


var prop = document.createElement('prop');
prop.id='prop';
document.body.appendChild(prop);
ReactDOM.render(<ReactProps name='a11'/>,document.getElementById('prop'));

var prop2 = document.createElement('prop2');
prop2.id='prop2';
document.body.appendChild(prop2);
ReactDOM.render(<ReactProps name='333'/>,document.getElementById('prop2'));

//react的生命周期
//ReactCircle
// componentWillMount 在渲染前调用,在客户端也在服务端。
//
// componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
//
// componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
//
// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
// 可以在你确认不需要更新组件时使用。
//
// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
//
// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
//
// componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。
var circle = document.createElement('circle');
circle.id='circle';
document.body.appendChild(circle);
ReactDOM.render(<ReactCircle />,document.getElementById('circle'));
//ajax返回数据
ReactDOM.render(
  <ReactAjax source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('circle')
);

registerServiceWorker();
