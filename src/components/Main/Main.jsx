import React from 'react'
import { Calculator } from '../Calculator/Calculator'
import logo from '../../assets/images/logo.svg'

export const Main = () => {
    return (
        <div className='flex flex-col items-center   '>
            <div className='h-28'>
                <img src={logo} alt="" />
            </div>
            <Calculator />
        </div>
    )
}
