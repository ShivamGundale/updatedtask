import React from 'react'
const Solution = (props) => {
  return (
    <div className='solution'>
        
        <h2>{props.title}</h2>
        <p>{props.info}</p>
        {<a>Explore more</a>}
    </div>
  )
}

export default Solution