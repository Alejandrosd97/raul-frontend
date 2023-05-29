import React from 'react'

export default function Comment(props) {
  return (
    <div>
        <span className='fw-bold mt-3 fs-5 d-block text-capitalize' style={{marginBottom : '-5px'}}>{props.data.name}</span>
        <small className='fs-6'>{props.data.date.split('T')[0]}</small>
        <p>{props.data.comment}</p>
        <hr />
    </div>
  )
}
