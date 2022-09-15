import React from 'react'
import { useRef } from 'react'
import { useGlobalContext } from '../context'

const Play = () => {
  const {
    setRound, 
    isPlaying, 
    disabled,
    setDisabled,
    setIsPlaying, 
    playingClassName,
    setPlayingClassName
  } = useGlobalContext()

  const btnRef = useRef(null)

  const handlePlayGame = (e)=>{
    // update round state value
    // decrease round by 1 if round value
    // is greater than 0, otherwise return 0
    
    if(!isPlaying){
      setDisabled(!disabled)
      setRound(preVal => preVal > 0 ? preVal - 1: preVal -0)
      setIsPlaying(!isPlaying)
      btnRef.current.style.backgroundColor = 'red';
      btnRef.current.disabled = true;
    }

  }
  return (
    <>
        <button 
          className={`play-btn`} 
          onClick={handlePlayGame}
          ref={btnRef}>Play
        </button>
    </>
  )
}

export default Play