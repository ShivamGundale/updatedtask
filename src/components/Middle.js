import React from 'react'
import Arcwork2 from '../Arwork2.png'
import Vision from './Vision';
import Solution from './Solution';
import Ecosystem from './Ecosystem';
import Upro from './Upro';
import Footer from './Footer'
const Middle = () => {
  return (
    <>
    <div className='middle'>
        <div className='middle1'>
        <div className='middle2'>
        <img src={Arcwork2}></img>
        </div>
        </div>
        <div className='middle3'>
          <h2>Your Gateway to <br/>Unrestricted <br/>Financial Freedom</h2>
          <p>At Ultrapro, our belief is simple yet profound: everyone deserves the freedom to earn, hold, spend, share, and give their money—regardless of their background or origin. We're not just a cryptocurrency platform; we're the epitome of trust, providing you with a seamless journey towards unrestricted financial empowerment.</p>
        </div>
    </div>
    <div className='visionparent'>
    <Vision title={'Vison'} info={'Powering a Prosperous Global Economy.Ultrapro envisions becoming the global currency, fueling a thriving global economy.'}/>
    <Vision title={'Mission'} info={'Driving Global Utility through Digital Innovation.Ultrapro is on a mission to be the global digital currency, fostering utility across the globe.'}/>
    <Vision title={'Values'} info={'Sustainability. Involvement. Transparency. Our core values define us—committed to sustainability, active involvement, and unwavering transparency.'}/>
    <Vision title={'Security'} info={'Fortified Protection for Your Peace of Mind.Ultrapro ensures unrivaled security with cutting-edge data encryption, secure access management, and state-of-the-art storage.'}/>
    </div>
    
    <div className='solutionparent'>
    <h1>Solutions</h1>
    <div className='just'>
      <div className='sol1'>
      <Solution title={'DEFI'} info={'Unlock the future of decentralized finance with Eenaswap. Discover innovative solutions for seamless, secure, and rewarding decentralized financial experiences.'}/></div>
      <div className='sol1'> <Solution title={'P2P'} info={'Buy and sell a variety of cryptos securely, faster, and simpler at EenaP2P.trade. Experience uninterrupted transactions like never before.Feel free to use this as a base and tailor it further to fit the specific tone and style of www.eenaP2P.trade.'}/>
      </div> 
      </div>
      <div className='just'>
      <div className='sol1'>
      <Solution title={'CANOPUS GTX WALLET'} info={'Canopus GTX Wallet is your unique solution for safeguarding digital assets like bitcoins. Unlike traditional wallets, it stores only the private keys to your cryptocurrency. Visit www.canopusgtx.com for a secure crypto storage experience.'}/> </div>
      <div className='sol1'><Solution title={'ULTRAPRO BRIDGE'} info={'A cross-chain bridge, is like a highway connecting different blockchain islands. It allows you to transfer your digital assets (cryptocurrency, tokens, etc.) from one blockchain to another.'}/></div>
      </div>
      <div className='just'>
      <div className='sol1'>
      <Solution title={'EXCHANGE'} info={'Exciting news! Ultrapro Blockchain is gearing up to unveil a cutting-edge Decentralized Exchange (DEX). Stay tuned for a revolutionary leap into decentralized trading.'}/>  </div>
      <div className='sol1'><Solution title={'NFT MARKETPLACE'} info={'Dive into the world of UPRO NFT at upronft.com. Discover unique digital assets, express your creativity, and be part of a vibrant NFT community. Your journey into the NFT realm starts here.'}/>
      </div>
      </div>
    </div>
    <div><Ecosystem/></div>
    <div><Upro/></div>
    <div><Footer/></div>
    </>
  )
}

export default Middle