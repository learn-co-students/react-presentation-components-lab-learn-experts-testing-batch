const React = require('react');

class DumbComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newState = 'sad';
    this.setState({
      mood: newState
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

module.exports = DumbComponent;
