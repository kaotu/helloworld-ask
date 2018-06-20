import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

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
      </div>
    )
  }
}

export default TimerViewDisplay
