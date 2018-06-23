import React from 'react'
import Link from 'gatsby-link'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Component } from 'react'
import style from 'styled-components'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  &:hover {
    background: #555;
  }
`
class Question {
  @observable question = ''

  @action
  handleChange = e => {
    this[e.target.name] = e.target.value
  }
  @action
  handleSubmit = e => {
    e.preventDefault()
    console.log('qestion : ', this.question)
    this.question = ''
  }
}

const store = new Question()

@observer
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>ASK 3.0</h1>
        question is:
        <form action="" onSubmit={store.handleSubmit}>
          <label>
            <h2>
              Question :
              <textarea
                name="question"
                value={store.question}
                onChange={store.handleChange}
              />
            </h2>
          </label>
          <Button>
            <input type="submit" value="Submit" />
          </Button>
        </form>
      </div>
    )
  }
}

export default IndexPage
