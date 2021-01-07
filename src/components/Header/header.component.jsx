import React from 'react'
import orangeImg from '../../assets/orange.svg'

const headerComponent = () => {
    return (
        <div className='block   py-1 flex flex-row justify-between items-center '>
            <div className="flex-initial px-2">
                <img className='w-4/12  h-full' src={orangeImg} />
            </div>
            <h2 className="flex-initial text-yellow-500 text-shadow font-bold text-2xl tracking-wide"> Dynamo Todo </h2>
        </div>
    )
}

export default headerComponent
