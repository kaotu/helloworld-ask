import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Area = styled.textarea`
  background-color: #002d40;
  color: #fff;
`

const IndexPage = () => (
  <div>
    <h1>Let's Ask</h1>
    <form action="">
      <Area cols="100" rows="10" />
      <br />
      <input type="submit" />
    </form>
    <Link to="/page-2/">Go to Modurator</Link>
  </div>
)

export default IndexPage
