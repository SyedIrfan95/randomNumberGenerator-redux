import React from 'react'
import { incrementNumber,decrementNumber,removeNumber } from '../actions/NumbersAction'
import { useDispatch, useSelector } from 'react-redux'

const NumbersList = (props)=>{
    const dispatch=useDispatch()

    const numbers=useSelector((state)=>{
        return state.numbers
    })

    const handleIncrement=(id)=>{
        dispatch(incrementNumber(id))
    }

    const handleDecrement=(id)=>{
        dispatch(decrementNumber(id))
    }

    const handleRemove=(id)=>{
        dispatch(removeNumber(id))
    }

    return(
        <div>
            <ul>
                {numbers.map((number)=>{
                    return <li key={number.id}> {number.value}
                    <button onClick={()=>{
                        handleIncrement(number.id)
                    }}>+</button>
                    <button onClick={()=>{
                        handleDecrement(number.id)
                    }}>-</button>
                    <button onClick={()=>{
                        handleRemove(number.id)
                    }}>x</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default NumbersList