import React from 'react'
import { FaUser, FaCrown, FaTrophy } from 'react-icons/fa'
export const UserWinner = ({animationClass}) => {
  return (
    <div className='winner-wrapper'>
        <div className='trophy-wrapper'>
            <FaTrophy className={`large-icon gold zoom trophy ${animationClass}`}/>
        </div>
        <h1>Congratulation!</h1>
        <div>
            <FaUser className='player zoom' />
        </div>
        {<p>You are the new king</p>}
        <div><FaCrown className='player large-icon' /></div>
    </div>
  )
}
