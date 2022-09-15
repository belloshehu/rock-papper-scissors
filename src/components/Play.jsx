import React from 'react'
import { useRef } from 'react'
import collection from '../collection'
import { useGlobalContext } from '../context'

const Play = () => {
  const {
    setRound, 
    isPlaying, 
    disabled,
    collection,
    choice,
    setChoice,
    setDisabled,
    setIsPlaying, 
    playingClassName,
    setPlayingClassName
  } = useGlobalContext()

  const btnRef = useRef(null)

  const getRandomChoice = () =>{
    // returns a random choice for computer
    let randomRank = Math.floor(Math.random() * 3)
    const computerChoice = collection.filter(item=> item.rank === randomRank)
    setChoice({...choice, computer: computerChoice[0]})
  }

  const handlePlayGame = (e)=>{
    // update round state value
    // decrease round by 1 if round value
    // is greater than 0, otherwise return 0
    
    if(!isPlaying){
      // getRandomChoice()
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