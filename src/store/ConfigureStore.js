import {createStore,combineReducers} from 'redux'
import numbersReducer from '../reducer/numbersReducer'

const ConfigureStore = ()=>{

    const store = createStore(combineReducers({
        numbers : numbersReducer
    }))
    return store
} 

export default ConfigureStore