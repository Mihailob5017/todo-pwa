import React, { useContext } from 'react'
import { active, inactive } from './switch.style'
import { Context } from '../../context/context.state'

const SwtichCOmponent = () => {
    const { state, changeSwtich } = useContext(Context)




    return (
        <div className='block flex flex-row justify-center mt-20 bg-grey-500'>
            <div className="w-8/12 h-10 flex flex-row justify-between">
                <button onClick={() => changeSwtich(false)} className={state.switchedToAdd === false ? active : inactive}>Todos</button>
                <button onClick={() => changeSwtich(true)} className={state.switchedToAdd === true ? active : inactive}>Add Todo</button>
            </div>
        </div>
    )
}

export default SwtichCOmponent
