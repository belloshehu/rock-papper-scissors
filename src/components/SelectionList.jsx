import React from 'react'
import { useState } from 'react'
import Selection from './Selection'

const SelectionList = () => {
    const selectionState = ['rock', 'papper', 'scissors']
    const [randomState, setRandomState] = useState('')

    const selection = [
        {
            text: 'Rock',
            rank: 1,
        },
        {
            text: 'Paper',
            rank: 2,
        },
        {
            text: 'Scissors',
            rank: 3,
        }
    ]

    return (
        <div className='selection-wrapper'>
            {
                selection.map( item =>{
                    return(
                        <Selection key={item.rank} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default SelectionList