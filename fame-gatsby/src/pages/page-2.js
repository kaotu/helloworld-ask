import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Ques = styled.div`
  width: 100%;
  height: 10%;
  background-color: #4044dd;
  color: #ffff44;
  border: 2px solid #fff;
  border-radius: 0.4em;
  text-align: center;
  padding: 0.2em;
`
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
