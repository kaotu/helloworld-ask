import React from 'react'
import Link from 'gatsby-link'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import axios from 'axios'

class Question {
  @observable question = ''
  @observable count = 0

  @action
  handleChange = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = async e => {
    e.preventDefault()
    console.log('question : ', this.question)
    this.count++
    let data = await axios.post('http://localhost:3001/question', {
      question: this.question,
    })
    console.log(data)
  }
}

const store = new Question()

@observer
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Enter Question: {store.count}</h1>
        <form action="" onSubmit={store.handleSubmit}>
          <textarea
            name="question"
            placeholder="your question..."
            value={store.question}
            onChange={store.handleChange}
          />
          <br />
          <button type="submit">Send</button>
        </form>

        <div>
          <Link to="/page-2/">Go to Admin page</Link>
        </div>
      </div>
    )
  }
}

export default IndexPage
