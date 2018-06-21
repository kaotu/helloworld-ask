import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import axios from 'axios'

class Question {
  @observable question = ''

  @action
  handleChange = e => {
    this[e.target.name] = e.target.value
  }

  @action
  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('question : ', this.question)
    let data = await axios.post('http://localhost:3001/question', { 
      //body
      question: this.question
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
        {store.question}
        <form action="" onSubmit={store.handleSubmit}>
          <textarea
            name="question"
            value={store.question}
            onChange={store.handleChange}
          />
          <br />
          <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }
}

export default IndexPage
