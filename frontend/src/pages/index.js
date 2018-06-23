import React from 'react'
import Card from '../components/Card'

class IndexPage extends React.Component {
  state = {
    text: '',
  }
  onSubmit = () => {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <div className="container pt-4">
          <Card>
            <div className="form-group">
              <label htmlFor="">Question</label>
              <input
                type="text"
                className="form-control"
                value={this.state.text}
                onChange={e => this.setState({ text: e.target.value })}
              />
            </div>
            <button
              onClick={() => this.onSubmit()}
              className="btn btn-primary btn-block"
            >
              Send
            </button>
          </Card>
        </div>
      </div>
    )
  }
}

export default IndexPage
