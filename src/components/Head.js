
import React from 'react'
import path from '../Path.svg'
import Vector from '../Vector.svg'
import Arwork from '../Arwork.png'
import Middle from './Middle';
import Asset2 from '../Asset2.png'

const Head = () => {
  return (
    <>
    <div className='head'>
      <div className='box'>
        <div className='separate'>
        <nav className='nav'>
          <div className='logo'>  <img src={path} /><h3>UPRO </h3></div>
          <ul>
            <li><a>Home</a></li>
            <li><a>Product</a></li>
            <li><a>Services</a></li>
            <li><a>Why Us</a></li>
            <li><a>Resorses</a></li>
            <li><a>About</a></li>
          </ul>
          <div className='button' >Build on UPRO</div>
        </nav>
        <div className='front'>
    <div className='front1'>
      <div className='subfront1'>
      <h2>Pinnaccle of Cryto <br/>Communities</h2>
      <p>Embark on a Financial Revolution with Ultrapro Blockchain.
Unleash the power of financial innovation and step into a decentralized realm of boundless possibilities. Join the ranks of millions worldwide who rely on Ultrapro Blockchain for its unparalleled technology, expansive global footprint, and unwavering commitment to pushing the boundaries of innovation.</p>

</div>
<div className='frontbutton'>
<div className='button' >Contact US</div>
<div className='button' >Learn more</div>
</div>
    </div>
    
    <div className='front2'>
      
      <img src={Arwork}></img>
      
    </div>
  </div>
  </div>
  <div className='headpart'>
        <div className='num1'>36+ <p>Countries</p></div>
        <div className='num2'>20000+ <p>Transaction/Day</p></div>
        <div className='num3'>1M+ <p>Trade per day</p></div>
      </div>
      </div>
      
      <Middle/>
      
    </div>

    
  </>
  )
}
{/* <img src={Vector} /> */}
export default Head