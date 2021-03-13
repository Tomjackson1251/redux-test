import React, { Component } from 'react'

export default class Demo extends Component {
  state = { count: 101 }
  add = () => {
    // const { count } = this.state
    // this.setState(
    //   {
    //     count: count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count)
    //   }
    // )
    setInterval(() => {
      this.setState((state, props) => {
        //   console.log(state, props)
        return { count: state.count + props.x }
      })
    }, 500)
  }
  
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add} style={{ backgroundColor: 'green' }}>
          +1
        </button>
      </div>
    )
  }
}
