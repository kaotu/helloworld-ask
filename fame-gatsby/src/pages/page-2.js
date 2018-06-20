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

const SecondPage = () => (
  <div>
    <h1>Modurator Page</h1>
    <h3>Question</h3>
    <Ques>How to use this Ask</Ques>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
