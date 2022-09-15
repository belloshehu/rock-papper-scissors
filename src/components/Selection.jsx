import React from 'react'
import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const Selection = ({text, randomState}) => {
    const {disabled} = useGlobalContext()
    const selectionRef = useRef(null)

    const handleSelection = (e) =>{
        // TODO: set selection state value
        // from parent component: SelectionList
    }

    useEffect(() => {
        // disable all buttons by default
        selectionRef.current.disabled = disabled;
    }, [disabled])
    
    return (
        <>
            <button 
                className={`selection-btn ${randomState} ${!disabled? 'zoom':''}`} 
                ref={selectionRef}>{text}
            </button>
        </>
    )
}

export default Selection