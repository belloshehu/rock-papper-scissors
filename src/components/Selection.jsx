import React from 'react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Selection = ({rank, text, randomState}) => {
    const {
            disabled, 
            choice, 
            score,
            setRound,
            setScore,
            setChoice, 
            collection, 
            setDisabled,
            setIsPlaying
        } = useGlobalContext()

    const selectionRef = useRef(null)
    
    const setWinnerRound = (userChoice, computerChoice) =>{
        /*determines who the winner is */

        // const {user: userChoice, computer: computerChoice} = choice
        // console.log('user:', userChoice, 'comu:', computerChoice)

        if(userChoice.subordinate === computerChoice.text){
            console.log('user win')
            setScore( (prev)=>{
                return {...prev, user: prev.user + 1}
            } )
        }else if(userChoice.text === computerChoice.subordinate){
            console.log('comp win')
            setScore( (prev)=>{
                return {...prev, computer: prev.computer + 1}
            } )
        }else{
            setScore(score)
            // console.log('no winner')
            // console.log(userChoice.text, userChoice.subordinate)
            // console.log(computerChoice.subordinate, computerChoice.text)

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
        const {computer, user} = choice
        console.log('text:', text)
        const userChoice = collection.filter(item => item.text === text)[0]
        const computerChoice = getRandomChoice()
        setChoice({computer: computerChoice, user: userChoice})
        console.log({computer: computerChoice, user: userChoice})

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
                ref={selectionRef}>{text}
            </button>
        </>
    )
}

export default Selection