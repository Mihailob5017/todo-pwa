import {SET_SWITCH} from './context.types'

const Reducer=(state, action)=>{
    switch (action.type) {
        case SET_SWITCH:
            return {...state,switchedToAdd:action.payload}
          
    
        default:
           return state
    }

}

export default Reducer