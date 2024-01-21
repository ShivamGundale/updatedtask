import React from 'react'
import Visionicon from '../visionicon.svg'
const Vision = (props) => {
  return (
    
        <div className='vision'>
          <img src={Visionicon}></img>
            <h1>{props.title}</h1>
            <p>{props.info}</p>
        </div>
    
  )
}

export default Vision