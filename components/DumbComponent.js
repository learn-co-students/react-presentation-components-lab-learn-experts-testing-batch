const React = require('react');

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }
  }

  handleClick() {
    this.setState({mood: 'sad'})
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>
    )
  }

}

module.exports = DumbComponent
