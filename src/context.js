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
    const [playingClassName, setPlayingClassName] = useState('playing')
    const [disabled, setDisabled] = useState(true)
    const [showHelp, setShowHelp] = useState(false)

    return(
        <AppContext.Provider value={
            {
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
                setIsPlaying,
                setPlayingClassName
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