import React from 'react'
import Link from 'gatsby-link'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Component } from 'react'

const appState = observable({
  count: 0,
})
appState.increment = function() {
  this.count++
}
appState.decrement = function() {
  this.count--
}

@observer
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>ASK 3.0</h1>
        Counter : {appState.count}
        <br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
        <form action="/page-2/">
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
  handleInc = () => {
    appState.increment()
  }
  handleDec = () => {
    appState.decrement()
  }
}

export default IndexPage
