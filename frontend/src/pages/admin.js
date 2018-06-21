import React from 'react'
import axios from 'axios'

class AdminPage extends React.Component {
  state = {
    questions: []
  }
  componentWillMount = async () => {
    let { data } = await axios('http://localhost:3001/question')
    this.setState({
      questions: data
    })
  }

  render() {
    return (
      <div>
        {this.state.questions.map(item => (
          <div key={item.id}>
            {item.question}
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

export default AdminPage
