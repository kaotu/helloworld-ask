import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

class AppState {
  @observable timer = 0
  constructor() {
    setInterval(() => {
      this.timer += 1
    }, 1000)
  }
  @action.bound
  reset() {
    this.timer = 0
  }
}

class TimerViewDisplay extends React.component {
  render() {
    return (
      <div>
        Timer : {AppState.timer}
        <button onClick={AppState.reset}>reset timer</button>
      </div>
    )
  }
}

export default TimerViewDisplay
