import React, { useReducer,createContext } from 'react';
import Reducer from './context.reducer'
import {SET_SWITCH} from './context.types';
export const Context=createContext();



export const Provider=({children})=>{

    // Boilerplate
    const globalState={
        allTodos:[],
        switchedToAdd:true
    }

    const [state,dispatch] = useReducer(Reducer,globalState)



    // changeSwtich
    const changeSwtich=(value)=>dispatch({type:SET_SWITCH,payload:value})




    return <Context.Provider value={{state,changeSwtich}}>{children}</Context.Provider>

}
