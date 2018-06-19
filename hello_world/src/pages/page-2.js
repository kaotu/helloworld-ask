import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi!</h1>
    <p>Welcome to Admin page</p>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
