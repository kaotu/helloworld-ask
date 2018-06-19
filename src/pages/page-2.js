import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Ans = styled.div`
  height: 10%;
  width: 100%;
  color: #fff;
  background-color: #000;
`

const SecondPage = () => (
  <div>
    <h1>Question</h1>
    <Ans>HI there</Ans>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
