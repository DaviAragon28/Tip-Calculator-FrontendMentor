import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const buttomClass = 'py-2  rounded-md text-white font-bold text-xl hover:bg-darkGrayishCyan'

export const SelectTip = () => {
  const { toStringToInt, onHandleCustom, button} = useContext(AppContext)
  console.log(button);



  return (
    <div className='flex flex-col gap-3'>
      <label className='text-[13px] text-darkGrayishCyan font-bold md:text-lg'>
        Select tip %
      </label>
      <div className='grid grid-cols-2 gap-2'>
        <button id='1' onClick={(e) => toStringToInt(e.target.textContent, '1')} className={`${buttomClass} ${button === '1' ? 'bg-lightGrayishCyan' : 'bg-veryDarkCyan'}`}>5%</button>
        <button id='2' onClick={(e) => toStringToInt(e.target.textContent, '2')} className={`${buttomClass} ${button === '2' ? 'bg-lightGrayishCyan' : 'bg-veryDarkCyan'}`}>10%</button>
        <button id='3' onClick={(e) => toStringToInt(e.target.textContent, '3')} className={`${buttomClass} ${button === '3' ? 'bg-lightGrayishCyan' : 'bg-veryDarkCyan'}`}>15%</button>
        <button id='4' onClick={(e) => toStringToInt(e.target.textContent, '4')} className={`${buttomClass} ${button === '4' ? 'bg-lightGrayishCyan' : 'bg-veryDarkCyan'}`}>25%</button>
        <button id='5' onClick={(e) => toStringToInt(e.target.textContent, '5')} className={`${buttomClass} ${button === '5' ? 'bg-lightGrayishCyan' : 'bg-veryDarkCyan'}`}>50%</button>
        <input onChange={onHandleCustom} type="number" className='bg-veryLightGrayishCyan px-4 text-xl font-bold outline-strongCyan text-veryDarkCyan  rounded-md text-right' placeholder='Custom' />
      </div>
    </div>
  )
}
