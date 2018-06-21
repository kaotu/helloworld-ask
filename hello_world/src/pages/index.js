import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  state = {
    count: 0,
    que: '',
  }

  handleClick = e => {
    this.setState({
      count: this.state.count + 1,
      que: '',
    })
  }
  render() {
    let { que } = this.state
    return (
      <div>
        <h1>Enter Question: {this.state.count}</h1>
        <form>
          <textarea
            type="text"
            placeholder="your quetion..."
            value={que}
            onChange={e => this.setState({ que: e.target.value })}
          />
        </form>

        <button onClick={this.handleClick}>send</button>
        <div>
          <Link to="/page-2/">Go to Admin page</Link>
        </div>
      </div>
    )
  }
}

export default IndexPage
