import React from 'react'
import { useRef } from 'react'
import { useEffect, useState} from 'react'
import { FaBalanceScale, FaCrown, FaSadTear} from 'react-icons/fa'
import { useGlobalContext } from '../context'

export const Win = () => {
    const {roundScore, round} = useGlobalContext()
    const divRef = useRef(null)
    const [animationClass, setAnimationClass] = useState('rotate')

    useEffect(() => {

        divRef.current.style = 'visibility: visible'
        const timeOut = setTimeout(()=>{
            divRef.current.style = 'visibility: hidden'
            setAnimationClass('')
        }, 1000)
        return () => {
            clearTimeout(timeOut)
        }
    }, [roundScore])
    
    if(roundScore.user === roundScore.computer){
        return (
            <div ref={divRef} className='round-winner-wrapper'>
             {round < 10? <FaBalanceScale className='large-icon red zoom round-win'/>: ''}
            </div>
        )
    }else if(roundScore.user > roundScore.computer){
        return (
            <div ref={divRef} className='round-winner-wrapper'>
                <FaCrown className={`large-icon zoom gold round-win ${animationClass}`}/> 
            </div>
        )
    }else{
        return (
                <div ref={divRef} className='round-winner-wrapper'>
                    <FaSadTear className={`large-icon zoom red round-win ${animationClass}`}/>
                </div>
            )
    }
}
