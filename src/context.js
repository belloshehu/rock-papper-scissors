import { createContext, useContext, useState } from "react"
import selection from './collection'

const AppContext = createContext()

const AppProvider = ({children}) =>{
    const roundSize = 10 // 10 rounds per game

    // All props
    const [score, setScore] = useState({user:0, computer: 0})
    // keeps what user and computer selected: 
    // either rock, papper or scissors
    const [collection, setCollection] = useState(selection)
    const [choice, setChoice] = useState({user: {}, computer: {}})
    const [round, setRound] = useState(roundSize)
    const [isPlaying, setIsPlaying] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [showHelp, setShowHelp] = useState(false)
    const [win, setWin] = useState(false) // use to track if user wins a round or not
    const [roundScore, setRoundScore] = useState({user:0, computer: 0})

    return(
        <AppContext.Provider value={
            {
                win,
                setWin,
                score, 
                setScore, 
                round, 
                showHelp,
                setShowHelp,
                disabled,
                setDisabled,
                setRound,
                isPlaying, 
                choice,
                collection, 
                setChoice,
                roundScore,
                setRoundScore,
                setIsPlaying,
            }
        }>

            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider, AppContext}