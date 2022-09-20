import React from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '../../context'
import { FaCrown, FaDesktop, FaTimes, FaUser } from 'react-icons/fa'




export const Header = () => {
  const {score, round, choice} = useGlobalContext() 

  useEffect(() => {
   
  }, [round])
  
  return (
  <React.Fragment>
    <div className='box'>
        <div className='flex-name'>
          <div className='player-wrapper computer-wrapper'>
            <FaDesktop className={`player ${score.computer > score.user? 'green': 'red'}`}/>
            <div className='img-wrapper'>
              {round === 10? '' :<img className='img-choice' src={choice.computer.image} alt='computer choice'/>}
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
              {round === 10? '' :<img className='img-choice' src={choice.user.image} alt='user choice'/>}
            </div>
            <p>{score.user}</p>
            <div>
            {
                score.user > score.computer? <FaCrown className='green' />: <FaTimes className='red'/>
            }
            </div>
          </div>
        </div>

        <div className='round'>
          <h3>Round {round}</h3>
        </div>
    </div>
  </React.Fragment>
  )
}
export  default Header