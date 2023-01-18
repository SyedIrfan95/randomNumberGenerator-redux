import React from 'react'
import { useSelector } from 'react-redux'
import NumbersList from './NumbersList'
import NumbersController from './NumbersController'
import AddNumber from './AddNumber'

const NumbersContainer = (props)=>{
    const numbers = useSelector((state)=>{
        return state.numbers
    })

    const findSum=()=>{
        let sum = 0
        numbers.forEach((number)=>{
            sum += number.value
        })
        return sum
    }

    return(
        <div>
            <h2>Listing - {numbers.length} , Sum - {findSum()} </h2>
            <NumbersList/>
            <NumbersController/>
            <AddNumber/>
        </div>
    )
}

export default NumbersContainer