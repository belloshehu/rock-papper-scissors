import React from 'react'
import { useState } from 'react'

export const Header = () => {
  const [userScore, setUserScore]  = useState(0)
  const [computerScore, setcomputerrScore]  = useState(0)


  return (
  <React.Fragment>
    <div className='box'>
      <div className='colume-info'>
      <div className='flex-name'>
        <span colume-computer>
        <h4 className='computer-color'>Computer</h4>
        <span>0</span>
        </span>
      
        <span colume-computer>
          <h4 className='user-color'>user</h4>
          <span>0</span>
        </span>
      </div>

      <div className='round-border'>
      <span className='round'> <h3>Round: </h3></span>
      </div>
      </div>

    </div>
  </React.Fragment>
  )
}
export  default Header