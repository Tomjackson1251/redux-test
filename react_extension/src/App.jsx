import React, { Component } from 'react'
import Demo from './components/1_setState'

export default class App extends Component {
  render() {
    return (
      <div>
        <Demo x={101} />
      </div>
    )
  }
}
