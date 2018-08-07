import React, { Component } from 'upstndr/internals/react'
import { Link } from 'upstndr/internals/react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <Link to='/todo'>ToDo Example</Link>
    )
  }
}
