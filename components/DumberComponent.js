const React = require('react')

const message = 'I am just happy'

export default function DumberComponent(props){
  return (
    <div onClick={props.handleClick.bind(this)}>{message}</div>
  )

}

module.exports = DumberComponent
