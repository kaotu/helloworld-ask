import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import Link from 'gatsby-link'

class AppState {
  @observable timer = 0
  constructor() {
    setInterval(() => {
      store.timer += 1
    }, 1000)
  }
  @action.bound
  reset() {
    this.timer = 0
  }
}

const store = new AppState()

class TimerViewDisplay extends React.Component {
  render() {
    return (
      <div>
        Timer : {store.timer}
        <button onClick={AppState.reset}>reset timer</button>
        <h1>Welcome to Admin Page </h1>
        <ul>
          <li>one : </li>
          <li>two : </li>
          <li>three : </li>
        </ul>
        <Link to="/">go to homepage</Link>
      </div>
    )
  }
}

export default TimerViewDisplay
