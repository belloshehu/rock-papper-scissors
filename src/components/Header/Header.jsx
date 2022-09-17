import React from 'react'
import { useState } from 'react'
import { AppContext } from '../../context'
import { useGlobalContext } from '../../context'
import { FaCrown, FaDesktop, FaTimes, FaUser } from 'react-icons/fa'




export const Header = () => {
  const {score, round, choice} = useGlobalContext() 
  return (
  <React.Fragment>
    <div className='box'>
        <div className='flex-name'>
          <div className='player-wrapper computer-wrapper'>
            <FaDesktop className={`player ${score.computer > score.user? 'green': 'red'}`}/>
            <div className='img-wrapper'>
              <img className='img-choice' src={choice.computer.image}/>
            </div>
            <p>{score.computer}</p>
            <div>
              {
                score.computer > score.user? <FaCrown  className='green'/>: <FaTimes className='red'/>
              }
            </div>
          </div>
        
          <div className='player-wrapper user-wrapper'>
            <FaUser className={`player ${score.user > score.computer? 'green': 'red'}`} />
            <div className='img-wrapper'>
              <img className='img-choice' src={choice.user.image}/>
              </div>
            <p>{score.user}</p>
            <div>
            {
                score.user > score.computer? <FaCrown className='green' />: <FaTimes className='red'/>
            }
            </div>
          </div>
        </div>

        <div>
          <h3>Round {round}</h3>
        </div>
    </div>
  </React.Fragment>
  )
}
export  default Header