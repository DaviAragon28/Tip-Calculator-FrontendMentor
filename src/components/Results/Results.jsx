import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'



export const Results = () => {
    const { tipPerPerson, totalPerPerson, reset } = useContext(AppContext)
    const conditional = tipPerPerson == 'NaN' || tipPerPerson == 'Infinity'

    return (
        <section className='flex flex-col bg-veryDarkCyan h-auto py-5 px-5 gap-4 rounded-xl justify-between md:flex-1'>
            <div className='flex flex-col gap-9'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <p className='text-lightGrayishCyan font-bold text-sm md:text-lg'>Tip Amount</p>
                        <p className='text-[13px] text-strongCyan md:text-sm'>/ person</p>
                    </div>
                    {
                        conditional
                            ? <p className='text-2xl font-bold text-strongCyan md:text-4xl'>$0.00</p>
                            : <p className='text-2xl font-bold text-strongCyan md:text-4xl'>${tipPerPerson}</p>
                    }
                </div>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <p className='text-lightGrayishCyan font-bold text-sm md:text-lg'>Total</p>
                        <p className='text-[13px] text-strongCyan md:text-sm'>/ person</p>
                    </div>
                    {
                        conditional
                            ? <p className='text-2xl font-bold text-strongCyan md:text-4xl'>$0.00</p>
                            : <p className='text-2xl font-bold text-strongCyan md:text-4xl'>${totalPerPerson}</p>
                    }
                </div>
            </div>
            <button disabled={totalPerPerson == 'NaN' || totalPerPerson == 'Infinity'} onClick={reset} className={`bg-strongCyan rounded-md font-bold py-2 mt-2 ${totalPerPerson == 'NaN' || totalPerPerson == 'Infinity' && 'hover:bg-lightGrayishCyan'} md:py-3 md:text-xl disabled:bg-gray-500 disabled:blur-[1px]`}>RESET</button>
        </section>
    )
}
