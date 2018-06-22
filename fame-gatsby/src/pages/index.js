import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Let's Ask</h1>
        <form action="">
          <textarea cols="100" rows="10" />
          <br />
          <input type="submit" />
        </form>
        <Link to="/page-2/">Go to Modurator</Link>
      </div>
    )
  }
}

export default IndexPage
