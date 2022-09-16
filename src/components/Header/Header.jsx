import React from 'react'
import { useState } from 'react'
import { AppContext } from '../../context'
import { useGlobalContext } from '../../context'
import FaComputer, { FaCrown, FaDesktop, FaUser } from 'react-icons/fa'




export const Header = () => {
  const {score, round, choice} = useGlobalContext() 
  return (
  <React.Fragment>
    <div className='box'>
        <div className='flex-name'>
          <div className='player-wrapper computer-wrapper'>
            <FaDesktop className='player'/>
            <div className='img-wrapper'>
              <img className='img-choice' src={choice.computer.image}/>
            </div>
            <p>{score.computer}</p>
            <div>
              <FaCrown/>
            </div>
          </div>
        
          <div className='player-wrapper user-wrapper'>
            <FaUser className='player' />
            <div className='img-wrapper'>
              <img className='img-choice' src={choice.user.image}/>
              </div>
            <p>{score.user}</p>
            <div>
              <FaCrown/>
            </div>
          </div>
        </div>

        <div className='round-border'>
          <span className='round'> <h3>Round {round}</h3></span>
        </div>
    </div>
  </React.Fragment>
  )
}
export  default Header