import React from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'
@observer
class AdminPage extends React.Component {
  state = {
    questions: [],
  }
  componentWillMount = async () => {
    let { data } = await axios('http://localhost:3001/question')
    this.setState({
      questions: data,
    })
  }
  render() {
    return (
      <div>
        {this.state.questions.map(item => (
          <div key={item.id}>{item.questions}</div>
        ))}
        <h1>AdminPage</h1>
      </div>
    )
  }
}

export default AdminPage
