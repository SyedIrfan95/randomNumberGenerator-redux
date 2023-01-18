const numbersInitialState = []

const numbersReducer = (state = numbersInitialState,action)=>{
    switch(action.type){
        case 'ADD_NUMBER' : {
            return [...state,{...action.payload}]
        }
        case 'PLUS_TWO' : {
            return state.map((num)=>{
                return {
                    ...num,
                    value:num.value+2
                }
            })
        }
        case 'REMOVE_ALL' : {
            return []
        }
        case 'INCREMENT_NUMBER' : {
            return state.map((num)=>{
                if(num.id === action.payload){
                    return {...num,value:num.value+1}
                }else{
                    return {...num}
                }
            })
        }
        case 'DECREMENT_NUMBER' : {
            return state.map((num)=>{
                if(num.id === action.payload){
                    return {...num,value:num.value-1}
                }else{
                    return {...num}
                }
            })
        }
        case 'REMOVE_NUMBER' : {
            return state.filter((num)=>{
                return num.id !== action.payload
            })
        }
        default : {
            return [...state]
        }
    }
}

export default numbersReducer