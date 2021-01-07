import React, { useState } from 'react'
import { active, inactive } from './switch.style'


const SwtichCOmponent = () => {

    const [isAddTodoSelected, setAddTodoSelected] = useState(false)



    return (
        <div className='block flex flex-row justify-center mt-20 bg-grey-500'>
            <div className="w-8/12 h-10 flex flex-row justify-between">
                <button onClick={e =>setAddTodoSelected(false)} className={isAddTodoSelected === false ? active : inactive}>Todos</button>
                <button onClick={e => setAddTodoSelected(true)} className={isAddTodoSelected === true ? active : inactive}>Add Todo</button>
            </div>
        </div>
    )
}

export default SwtichCOmponent
