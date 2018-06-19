import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Ans = styled.div`
  width: 100%;
  color: #fff;
  background-color: #012144;
  border: 0.1em solid #000;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 1%;
`

const SecondPage = () => (
  <div>
    <h1>Question</h1>
    <Ans>HI there</Ans>
    <Ans>HI there2</Ans>
    <Ans>HI there3</Ans>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
