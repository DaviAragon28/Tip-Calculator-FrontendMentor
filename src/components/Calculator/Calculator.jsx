import React, { useContext } from 'react'
import { Input } from '../Input/Input'
import { SelectTip } from '../SelectTip/SelectTip'
import iconDollar from '../../assets/images/icon-dollar.svg'
import iconPerson from '../../assets/images/icon-person.svg'
import { Results } from '../Results/Results'
import { AppContext } from '../../context/AppContext'


export const Calculator = () => {
    const { onHandlePerson, onHandleBill } = useContext(AppContext)
    return (
        <section className='bg-white w-80 h-auto rounded-xl py-5 px-4 flex flex-col gap-5 md:flex-row md:w-auto'>
            <div className='flex flex-col gap-6 md:w-1/2'>
                <Input
                    icon={iconDollar}
                    label='Bill'
                    placeholder='Bill'
                    funtion={ onHandleBill }
                />
                <SelectTip />
                <Input
                    icon={iconPerson}
                    label='Number of People'
                    placeholder='5'
                    funtion={ onHandlePerson }
                />
            </div>
            <Results />
        </section>
    )
}
