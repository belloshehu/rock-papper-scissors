import React from 'react'
import { useGlobalContext } from '../context'
import Selection from './Selection'
import Play from './Play'

const SelectionList = () => {
    // class names for each selection button 
    const {collection} = useGlobalContext()

    return (
        <div className='selection-wrapper'>
            {
                collection.map( (item, index) =>{
                    return(
                        <Selection key={index} {...item} />
                    )
                })
            }
            <Play/>
            <button className='top-play-btn'></button>
        </div>
    )
}

export default SelectionList