import React from 'react'
import Link from 'gatsby-link'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Component } from 'react'

@observer
class IndexPage extends React.Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = e => {
    alert('A Question was submitted:' + this.state.value)
    e.perventDefault()
  }

  render() {
    return (
      <div>
        <h1>ASK 3.0</h1>
        <form onSubmit={this.handleSubmit} action="/page-2/">
          <label>
            <h5>
              Question :
              <input
                type="text"
                value={this.value}
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
