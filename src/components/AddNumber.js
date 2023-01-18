import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../actions/NumbersAction'

const AddNumber = (props)=>{
    const [number,setNumber]=useState('')

    const dispatch=useDispatch()

    const handleNumber=(e)=>{
        setNumber(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const num={
            id:Date.now(),
            value:Number(number)
        }
        dispatch(addNumber(num))
        setNumber('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={number} onChange={handleNumber} />
            </form>
        </div>
    )
}

export default AddNumber