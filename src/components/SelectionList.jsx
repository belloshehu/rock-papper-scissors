import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context'
import Selection from './Selection'

const SelectionList = () => {
    // class names for each selection button 
    const selectionState = ['rock', 'papper', 'scissors']
    const [randomState, setRandomState] = useState('')
    const {collection} = useGlobalContext()

    return (
        <div className='selection-wrapper'>
            {
                collection.map( item =>{
                    return(
                        <Selection key={item.rank} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default SelectionList