import React, { Component, Fragment } from 'upstndr/internals/react'
import { Link } from 'upstndr/internals/react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/todo'>ToDo Example</Link>
        <Link to='/repositories'>GitHub Repositories</Link>
      </Fragment>
    )
  }
}
