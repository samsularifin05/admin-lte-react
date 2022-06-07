import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} className={`btn btn-${props.color} ${props.block && 'btn-block'}`}> {props.title} </button>
  )
}

export default Button