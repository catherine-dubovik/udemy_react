import React from 'react';

const UserOutput = (props) => {
  return(
    <div>
      <p>Hello, I am {props.name}</p>
      <p>i am {props.age}</p>
    </div>
  )
}

export default UserOutput