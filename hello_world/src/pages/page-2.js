import React from 'react'
import Link from 'gatsby-link'
import axios from 'axios'

class SecondPage extends React.Component {
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
          <div key={item.id}>
            {item.question}
            <hr />
          </div>
        ))}
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
export default SecondPage
