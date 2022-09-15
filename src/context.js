import { createContext, useContext, useState } from "react"

const AppContext = createContext()

const AppProvider = ({children}) =>{
    const roundSize = 10 // 10 rounds per game
    const [score, setScore] = useState({user:0, computer: 0})
    const [round, setRound] = useState(roundSize)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playingClassName, setPlayingClassName] = useState('playing')
    const [disabled, setDisabled] = useState(true)

    return(
        <AppContext.Provider value={
            {
                score, 
                setScore, 
                round, 
                disabled,
                setDisabled,
                setRound,
                isPlaying, 
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