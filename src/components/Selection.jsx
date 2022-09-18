import React from 'react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Selection = ({text, randomState}) => {
    const {
            score,
            disabled, 
            setRound,
            setScore,
            setChoice, 
            collection, 
            setDisabled,
            setIsPlaying,
            setRoundScore,
        } = useGlobalContext()

    const selectionRef = useRef(null)
    
    const setWinnerRound = (userChoice, computerChoice) =>{
        /*determines who the winner is */

        if(userChoice.subordinate === computerChoice.text){
            setRoundScore({computer: 0, user: 1})
            setScore( (prev)=>{
                return {...prev, user: prev.user + 1}
            })
        }else if(userChoice.text === computerChoice.subordinate){
            setRoundScore({computer: 1, user: 0})
            setScore( (prev)=>{
                return {...prev, computer: prev.computer + 1}
            })
        }if(userChoice.text === computerChoice.text){
            setRoundScore({computer: 0, user: 0})
            setScore(score)
        }
    }
    const getRandomChoice = () =>{
        // returns a random choice for computer
        let randomIndex = Math.floor(Math.random() * 3)   
        return collection[randomIndex]     
    }

    const handleSelection = (e) =>{
        // TODO: set selection state value
        // from parent component: SelectionList
        console.log('text:', text)
        const userChoice = collection.filter(item => item.text === text)[0]
        const computerChoice = getRandomChoice()
        setChoice({computer: computerChoice, user: userChoice})

        // enable button for next round
        setDisabled(prev => !prev)
        setIsPlaying(prev => !prev)

        //update round
        setRound(preVal => preVal > 0 ? preVal - 1: preVal -0)

        // get winner after a second
        setWinnerRound(userChoice, computerChoice)
    }

    useEffect(() => {
        // disable all buttons by default
        selectionRef.current.disabled = disabled;
    }, [disabled])
    
    return (
        <>
            <button 
                onClick={handleSelection}
                className={`selection-btn ${randomState} ${!disabled? '':''} `
                } 
                ref={selectionRef}>{text[0].toUpperCase() + text.slice(1, text.length)}
            </button>
        </>
    )
}

export default Selection