import React from 'react'


// Components
import Input from '../Input/input.component'
import Dropdown from '../Dropdown/dropdown.component'
import Button from '../Button/button.component'

const ModalComponent = () => {
    return (
        <div className='w-11/12 h-screen-50 mx-auto mt-2  border-solid border-2 rounded border-yellow-500 flex flex-column justify-center  bg-gray-200'>
            <Input />
            <Dropdown />
            <Button />
        </div>
    )
}

export default ModalComponent
