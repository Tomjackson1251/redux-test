import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }

  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }

  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h2>我是你爷</h2>
        <h4>
          当前求和为：{this.props.count},下方总人数为：
          {this.props.personCount}
        </h4>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇+</button>&nbsp;
        <button onClick={this.incrementAsync}>async+</button>&nbsp;
      </div>
    )
  }
}

export default connect(
  (state) => ({ count: state.count, personCount: state.persons.length }),
  { increment, decrement, incrementAsync }
)(Count)
