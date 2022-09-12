import React from 'react'
import { useRef, useEffect } from 'react'

const Selection = ({text, randomState}) => {

    const selectionRef = useRef(null)

    const handleSelection = (e) =>{
        // TODO: set selection state value
        // from parent component: SelectionList
    }

    useEffect(() => {
        // disable all buttons by default
        selectionRef.current.disabled = true;
    }, [])
    
    return (
        <>
            <button className={`selection-btn ${randomState}`} ref={selectionRef}>{text}</button>
        </>
    )
}

export default Selection