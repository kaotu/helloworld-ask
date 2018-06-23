import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { runInDebugContext } from 'vm'

class IndexPage extends React.Component {
  state = {
    questions: [],
    text: '',
  }

  async componentWillMount() {
    await this.fetchData()
  }

  fetchData = async () => {
    let resp = await axios.get('http://localhost:3001/questions')

    await this.setState({
      questions: resp.data,
    })
  }

  onSubmit = async () => {
    console.log('hi')
    let resp = await axios.post('http://localhost:3001/questions', {
      text: this.state.text,
    })

    if (resp.data) {
      alert('Completed Yeah')
      this.setState({
        text: '',
      })
      await this.fetchData()
    }
  }

  render() {
    return (
      <div>
        <div className="container pt-4">
          <Card>
            <ul>
              {this.state.questions.map((question, index) => (
                <li key={index}>{question.text}</li>
              ))}
            </ul>
          </Card>
          <br />
          <Card>
            <div className="form-group">
              <label htmlFor="">Question</label>
              <input
                type="text"
                className="form-control"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              />
            </div>
            <button
              onClick={() => this.onSubmit()}
              className="btn btn-primary btn-block"
            >
              Send
            </button>
          </Card>
        </div>
      </div>
    )
  }
}

export default IndexPage
