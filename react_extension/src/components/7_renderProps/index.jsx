import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是你爹组件</h3>
        <A render={(name) => <C name={name} />} />
      </div>
    )
  }
}

class A extends Component {
  //   static contextType = MyContext
  state = { name: 'Tom' }
  render() {
    return (
      <div className="child">
        <h3>我是A组件</h3>
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

// function C() {
//   return (
//     <div className="grand">
//       <h3>我是C组件</h3>
//       <h4>
//         我的用户名是：
//         <Consumer>{(value) => `${value.username},年龄是${value.age}`}</Consumer>
//       </h4>
//     </div>
//   )
// }
