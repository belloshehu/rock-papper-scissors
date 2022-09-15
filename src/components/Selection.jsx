import React from 'react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Selection = ({rank, text, randomState}) => {
    const {disabled, choice, setChoice, collection} = useGlobalContext()
    const selectionRef = useRef(null)

    const getRandomChoice = () =>{
        // returns a random choice for computer
        let randomRank = Math.floor(Math.random() * 3)
        const computerChoice = collection.filter(item=> item.rank === randomRank)   
        return computerChoice[0]     
      }

    const handleSelection = (e) =>{
        // TODO: set selection state value
        // from parent component: SelectionList
        const {computer, user} = choice
        const userChoice = collection.filter(item=> item.rank === rank)
        const computerChoice = getRandomChoice()
        setChoice({computer: computerChoice, user: userChoice[0]})
    }

    useEffect(() => {
        // disable all buttons by default
        selectionRef.current.disabled = disabled;
    }, [disabled])
    
    return (
        <>
            <button 
                onClick={handleSelection}
                className={`selection-btn ${randomState} ${!disabled? 'zoom':''} `
                } 
                ref={selectionRef}>{text}
            </button>
        </>
    )
}

export default Selection