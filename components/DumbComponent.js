const React = require('react');

class DumbComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({mood: 'sad'});
  }

  render() {
    const {mood} = this.state;
    return (
      <div onClick={this.handleClick}>
        <p>{mood}</p>
      </div>
    )
  }
}

module.exports = DumbComponent;
