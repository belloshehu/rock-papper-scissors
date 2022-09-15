import React from 'react'
import { useState } from 'react'
import { AppContext } from '../../context'
import { useGlobalContext } from '../../context'

export const Header = () => {
  const {score, round} = useGlobalContext() 
  return (
  <React.Fragment>
    <div className='box'>
      <div className='colume-info'>
        <div className='flex-name'>
          <span colume-computer>
            <h4 className='computer-color'>Computer</h4>
            <span>{score.computer}</span>
          </span>
        
          <span colume-computer>
            <h4 className='user-color'>user</h4>
            <span>{score.user}</span>
          </span>
        </div>

        <div className='round-border'>
          <span className='round'> <h3>Round {round}</h3></span>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}
export  default Header