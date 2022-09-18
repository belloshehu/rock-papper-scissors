import React from 'react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'


const Play = () => {
  let randomNumber = 0
  const {
    round,
    choice,
    isPlaying, 
    disabled,
    collection,
    setChoice,
    setDisabled,
    setIsPlaying,
  } = useGlobalContext()

  const btnRef = useRef(null)

  const handlePlayGame = (e)=>{
    // update round state value
    // decrease round by 1 if round value
    // is greater than 0, otherwise return 0
    
    if(round > 0){
      if(!isPlaying){
        // getRandomChoice()
        setDisabled(!disabled)        
        setIsPlaying(!isPlaying)
        // btnRef.current.disabled = `${disabled}`;
      }
    }else{
      btnRef.current.disabled = true;
    }

  }

  useEffect(() => {
    let interval = null

    if(isPlaying){
      interval = setInterval(()=>{
        if(randomNumber < 2){
          randomNumber++
        }else{
          randomNumber = 0
        }
        setChoice({...choice, computer:collection[randomNumber]})
      }, 200)
    }
    return ()=>{
      clearInterval(interval)
    }
  }, [disabled])
  
  return (
    <>
        <button 
          className={`play-btn  ${isPlaying? 'playing zoom': 'grey'}`} 
          onClick={handlePlayGame}
          ref={btnRef}> {isPlaying? 'Playing': 'Play'}
        </button>
    </>
  )
}

export default Play