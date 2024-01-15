import React from 'react'
import Bird from '../bird.svg'
import Group1 from '../Group1.svg'
import Group2 from '../Group2.svg'
import Group3 from '../Group3.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='subfooter'>
          <div className='subfooter1'>
          <div className='footbird'>
          <img src={Bird}></img>
          <p>UPRO</p>
        </div>
        <div className='footpara'><p>The Ultrapro is all about community.It's made up of people from all different backgrounds and interests.</p></div>
        <div className='handles'>
          <a><img src={Group1}></img></a>
          <a><img src={Group2}></img></a>
          <a><img src={Group3}></img></a>
        </div>
          </div>
          <div className='subfooter2'>
            <h2>Navigation</h2>
            <ul>
              <li>Abouts Us</li>
              <li>what we do</li>
              <li>News</li>
              <li>Projects</li>
              <li>FAQ</li>
              <li>Offices</li>
            </ul>
          </div>
          <div className='subfooter3'>
          <h2>Resources</h2>
            <ul>
              <li>Resources</li>
              <li>what we do</li>
              <li>News</li>
              <li>Projects</li>
              <li>FAQ</li>
              <li>Offices</li>
            </ul>
          </div>
          <div className='subfooter4'>
          <h2>Contact Info</h2>
            <ul>
              <li>IFZA Dubai Silicon Oasis, Dubai, United <br/> Arab Emirates</li>
              <li>Telephone : + (012) 345 6789</li>
              <li>Fax : + (012) 345 6789</li>
              <li>Email : XYZ@upro.com</li>
              
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer