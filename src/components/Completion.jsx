import React from 'react'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { FaDesktop, FaUser, FaTimes, FaCrown, FaSmile, FaTrophy } from 'react-icons/fa'
import { useGlobalContext } from '../context'

export const Completion = () => {
    const modalRef = useRef(null)
    const {winner, score, round, setRound, setScore} = useGlobalContext()
    const [animationClass, setAnimationClass] = useState('rotate')
    const closeModal = () =>{
        modalRef.current.style = `transform: translateY(-100vh)`
        setScore({user:0, computer: 0})
        setRound(10)
    }

    const getFinalWinner = () =>{
        
        if(score.user > score.computer){
          return score.user
        }else if(score.computer > score.user){
            return score.computer
        }else{
            return null
        }
    }

    useEffect(() => {
      const timeOut = setTimeout(()=>{ setAnimationClass('translate')}, 3000)
    
      return () => {
        clearTimeout(timeOut)
      }
    }, [])
    
    return (
        <div ref={modalRef} className='completion-modal'>
            {
                getFinalWinner()?
                (
                    <div className='winner-wrapper'>
                        <div className='trophy-wrapper'>
                            <FaTrophy className={`large-icon gold zoom trophy ${animationClass}`}/>
                        </div>
                        <h1>Congratulation!</h1>

                        <div>
                            {score.user > score.computer? <FaUser className='player zoom' /> : <FaDesktop className='player zoom'/>}
                        </div>
                        {/* <h2 className='score'>{getFinalWinner()}/10</h2> */}
                        <p>You are the new king</p>
                        <div><FaCrown className='player large-icon' /></div>
                    </div>
                ):
                (
                    <div className='winner-wrapper'>
                        <h1>Draw!</h1>
                        <div className='crown-wrapper'>
                            <FaCrown className='player' />
                            <FaCrown className='player' />
                        </div>
                        <div className='players-wrapper'>
                            <FaUser className='player zoom large-icon'/> 
                            <FaDesktop className='player zoom large-icon'/>
                        </div>
                        <div className='score-wrapper'>
                            <h2 className='score'>{score.user}/10</h2>
                            <h2 className='score'>{score.user}/10</h2>
                        </div>
                    </div>
                )
            }
            <button onClick={closeModal} className="btn">Done</button>
        </div>
    )
}
