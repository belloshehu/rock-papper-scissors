import React from 'react'
import { FaSadCry, FaUser } from 'react-icons/fa'

export const UserLoser = ({animationClass}) => {
  return (
    <div className='winner-wrapper'>
        <div className='trophy-wrapper'>
            <FaSadCry className={`large-icon gold zoom trophy ${animationClass}`}/>
        </div>
        <h1>Oops! You Lost</h1>
        <div>
            <FaUser className='player zoom' />
        </div>
        {<p>Try again</p>}
        {/* <div><FaCrown className='player large-icon' /></div> */}
    </div>
  )
}
