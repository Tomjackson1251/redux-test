import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    if (this.nameNode.value.trim().length === 0) return
    const name = this.nameNode.value
    if (this.ageNode.value.trim().length === 0) return
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }

  render() {
    return (
      <div>
        <h2>我是你爹</h2>
        <h3>你的马死了{this.props.count}次</h3>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((a) => {
            return (
              <li key={a.id}>
                {a.name}---{a.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  (state) => ({ persons: state.persons, count: state.count }),
  { addPerson }
)(Person)
