import React from 'react'
import { useGlobalContext } from '../context'

const Play = () => {
  const {setRound} = useGlobalContext()
  const handlePlayGame = (e)=>{
    // update round state value
    // decrease round by 1 if round value
    // is greater than 0, otherwise return 0
    setRound(preVal => preVal > 0 ? preVal - 1: preVal -0)
  }
  return (
    <>
        <button className='play-btn' onClick={handlePlayGame}>Play</button>
    </>
  )
}

export default Play