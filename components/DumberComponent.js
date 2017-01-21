const React = require('react')

const DumberComponent = (props) => {
  return (
    <div onClick={props.handleClick}>
      <p>I am just happy</p>
    </div>
  )
}

module.exports = DumberComponent