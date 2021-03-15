import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
  state = { carName: '奔驰c63' }

  changeCar = () => {
    this.setState({ carName: '小破车' })
  }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props, this.state)
  //     console.log(nextProps, nextState)
  //     if (this.state.carName === nextState.carName) return false
  //     else return true
  //   }
  render() {
    console.log(1)
    return (
      <div>
        <h3>我是Parent组件</h3>
        <span>我的小车{this.state.carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child />
      </div>
    )
  }
}

class Child extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props, this.state)
  //     console.log(nextProps, nextState)
  //     if (this.state.carName === nextState.carName) return false
  //     else return true
  //   }
  render() {
    console.log(2)
    return (
      <div>
        <h3>我是Child组件</h3>
      </div>
    )
  }
}
