import React from 'react'
import Solutionicon from '../solutionicon.svg'
import Solutionicon2 from '../solutionicon2.svg'
const Solution = (props) => {
  return (
    <div className='solution'>
      <div className='soldiv'>
      <img className='solimg1' src={Solutionicon2}></img>
        <img className='solimg2' src={Solutionicon}></img>
        </div>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
        {<a>Explore more</a>}
    </div>
  )
}

export default Solution