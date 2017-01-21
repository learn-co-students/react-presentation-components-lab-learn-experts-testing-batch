const React = require('react')

class DumbComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({mood: 'sad'})
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

module.exports = DumbComponent