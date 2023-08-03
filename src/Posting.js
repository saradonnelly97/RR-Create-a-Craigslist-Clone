import React from 'react'

function posting(props) {
  return (
    <div>
        <div>{props.data.price}</div>
        <img src={props.data.imageURL} alt={props.data.title}/>
        <span>{props.data.title}</span>
    </div>
  )
}

export default posting