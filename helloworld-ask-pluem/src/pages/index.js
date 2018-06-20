import React from 'react'
import Link from 'gatsby-link'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Component } from 'react'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants'
@observer
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() })
  }
  handleSubmit(event) {
    alert('A name was submitted:' + this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <h1>ASK 3.0</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h5>
              Name :
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </h5>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default IndexPage
