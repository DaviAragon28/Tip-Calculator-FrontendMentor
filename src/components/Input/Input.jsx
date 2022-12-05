import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

export const Input = ({ icon, label, placeholder, funtion  }) => {

    return (
        <div className='flex flex-col gap-1'>
            <label className='text-[13px] text-darkGrayishCyan font-bold md:text-lg'>{label}</label>
            <div className='relative'>
                <input onChange={funtion} type="number" placeholder={placeholder} className='bg-veryLightGrayishCyan py-1 px-3 font-bold text-2xl text-veryDarkCyan outline-strongCyan rounded-md text-right w-full md:py-2 ' />
                <img src={icon} alt="" className='absolute top-[50%] left-2 translate-y-[-50%]' />
            </div>
        </div>
    )
}
