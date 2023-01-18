import React from 'react'
import { useDispatch } from 'react-redux'
import { addNumber, plusTwo, removeAll } from '../actions/NumbersAction'

const NumbersController = (props)=>{
    const dispatch = useDispatch()

    function generateNumber(){
        const randomNumber = Math.round(Math.random()*100)
        const num={
            id:Date.now(),
            value:randomNumber
        }
        dispatch(addNumber(num))
    }

    function handlePlusTwo(){
        dispatch(plusTwo())
    }

    function handleRemoveAll(){
        dispatch(removeAll())
    }

    return(
        <div>
            <button onClick={generateNumber}>Generate</button>
            <button onClick={handlePlusTwo}>+2</button>
            <button onClick={handleRemoveAll}>Remove All</button>
        </div>
    )
}

export default NumbersController