import React from 'react';
import './UserStyle.css'

const UserOutput = (props) => {
  return(
    <div className='item'>
      <p>Hello, I am {props.name}</p>
      <p>i am {props.age}</p>
    </div>
  )
}

export default UserOutput