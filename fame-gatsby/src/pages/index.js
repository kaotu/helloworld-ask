import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import Link from 'gatsby-link'

class Question {
  @observable question = ''

  @action
  handleChange = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = e => {
    e.preventDefault()
  }
}

const store = new Question()

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        {store.question}
        <h1>Let's Ask</h1>
        <form action="" onSubmit={store.handleSubmit}>
          <textarea
            cols="100"
            rows="10"
            name="question"
            value={store.question}
            onChange={store.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
        <Link to="/page-2/">Go to Modurator</Link>
      </div>
    )
  }
}

export default IndexPage
