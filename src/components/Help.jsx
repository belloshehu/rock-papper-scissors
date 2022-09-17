import React from 'react'
import { useGlobalContext } from '../context'
import { useRef, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'

export const Help = () => {
    const helpRef = useRef(null)
    const {showHelp, setShowHelp} = useGlobalContext()
    const [animationClass, setAnimationClass] = useState('rotate')

    useEffect(() => {
        // const timeOut = setTimeout(()=>{ setAnimationClass('translate')}, 3000)
        // return () => {
        //   clearTimeout(timeOut)
        // }
      }, [])

    return (
        <div className='help-modal' ref={helpRef}>
            <FaTimes onClick={()=>setShowHelp(false)}  className='close-btn red'/>
            <div>
                <h2>Description</h2>
                <p>
                    This game mimics the rock-paper-scissors game.  Rock can break scissors. 
                    Paper can wrap rock. Scissors can cut papper.
                </p>
            </div>
            <div>
                <h3>How it works</h3>
                <p>
                    This game is played between user and computer. 
                    User and computer select either rock, paper or scissors. 
                    If user selects rock and computer selects papper, then computer wins because papper can wrap rock. 
                    If user selects papper and computer selects scissors, then computer wins because scissors can cut rock. 
                    If user selects scissors and computer selects rock, then computer wins because rock can break scissors.
                    The same thing applies if the selection is the order way found. 
                </p>
                <h3>How To Play</h3>
                <p>To play, click the "play" button and select an item: rock, paper or scissors</p>
            </div>
        </div>
    )
}
