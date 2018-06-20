import React from 'react'
import Link from 'gatsby-link'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Component } from 'react'

@observer
class IndexPage extends React.Component {
  @observable value = ''

  handleChange = e => {
    this.value = e.target.value
  }

  handleSubmit = e => {
    alert('A Question was submitted:' + this.value)
    e.perventDefault()
  }

  render() {
    return (
      <div>
        <h1>ASK 3.0</h1>
        <form onSubmit={this.handleSubmit} action="/page-2/">
          <label>
            <h2>
              Question :
              <textarea value={this.value} onChange={this.handleChange} />
            </h2>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default IndexPage
