const React = require('react');

export default function DumberComponent(props) {
    return (
      <div onClick={props.handleClick}>
        <h1>
          I am just happy
        </h1>
      </div>
    )
}

module.exports = DumberComponent;
