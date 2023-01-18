export const addNumber = (randomNumber)=>{
    return {
        type : 'ADD_NUMBER',
        payload : randomNumber
    }
}

export const plusTwo=()=>{
    return {
        type : 'PLUS_TWO'
    }
}

export const removeAll=()=>{
    return {
        type:'REMOVE_ALL'
    }
}

export const incrementNumber=(id)=>{
    return {
        type : 'INCREMENT_NUMBER',
        payload : id
    }
}

export const decrementNumber=(id)=>{
    return {
        type : 'DECREMENT_NUMBER',
        payload : id
    }
}

export const removeNumber=(id)=>{
    return {
        type : 'REMOVE_NUMBER',
        payload : id
    }
}