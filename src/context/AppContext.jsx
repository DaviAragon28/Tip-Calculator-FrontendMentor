import { createContext, useState } from "react";

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [tip, setTip] = useState(0)
    const [bill, setBill] = useState(0)
    const [person, setPerson] = useState(0)
    const [custom, setCustom] = useState(0)
    const [button, setButton] = useState(0)
    const inputs = document.querySelectorAll('input')
    
    // const [button1, setButton1] = useState(false)
    // const [button2, setButton2] = useState(false)
    // const [button3, setButton3] = useState(false)
    // const [button4, setButton4] = useState(false)
    // const [button5, setButton5] = useState(false)

    // const buttons = document.getElementsByClassName('bg-veryDarkCyan')
    // console.log(buttons);

    const toStringToInt = (value, id) => {
        setButton(id)
        console.log(button);
        const buttonPage = document.getElementById(`${id}`)
        // buttonPage.style.backgroundColor = '#c5e4e7'
        // buttonPage.style.color= '#00494d'

        if (value.length === 2) {
            setTip(parseInt(value.slice(0, 1)))
        } else {
            setTip(parseInt(value.slice(0, 2)))
        }
    }
    
    let tipFinal
    if (tip > 0 && custom === 0) {
        tipFinal = (bill * tip / 100)
    } else {
        tipFinal = (bill * custom / 100)
    }

    const tipPerPerson = (tipFinal / person).toFixed(2)
    const totalPerPerson = ((bill + tipFinal) / person).toFixed(2)


    const onHandleBill = (e) => {
        setBill(parseFloat(e.target.value));
    }

    const onHandlePerson = (e) => {
        setPerson(parseFloat(e.target.value));
    }

    const onHandleCustom = (e) => {
        setCustom(parseInt(e.target.value));
        setTip(0)
        setButton(0)
        if (e.target.value === '') {
            setCustom(0)
        }

    }

    const reset = () => {
        setTip(0)
        setBill(0)
        setPerson(0)
        setCustom(0)
        setButton(0)
        const inputsAsArray = [...inputs]
        inputsAsArray.map(input => {
            return input.value = '';
        })
    }

    return (
        <AppContext.Provider value={{button, toStringToInt, onHandleBill, onHandlePerson, tipPerPerson, totalPerPerson, reset, onHandleCustom }}>
            {children}
        </AppContext.Provider>
    )
}