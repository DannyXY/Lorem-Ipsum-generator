import React, { useContext, useState, useEffect } from 'react'
import { texts } from './data'
import axios from "axios";

const AppContext =  React.createContext()
const AppProvider = ({children}) => {
    const [pGraph, setPGraph] = useState(0)
    const [text,setText] = useState([])
    const [font,setFont] = useState('')
    const [showModal,setShowModal] = useState(false)
    const [copySuccess, setCopySuccess] = useState(null)
    

    
    useEffect(()=>{
        setCopySuccess(null)
    },[text])

    const toggleModal = ()=>{
        setShowModal(!showModal)
        // console.log('hi');
    }
    
    const copyToClipboard = () =>{
        if(text.length === 0){
            setCopySuccess(null)
        }
        else{
            navigator.clipboard.writeText(text)
            setCopySuccess(true)
        }
    }

    const handleFonts = (e) => {
        setFont(e.target.value)
        console.log(font);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        let amount = parseInt(pGraph)
        if(amount<=0){
            amount = 1
        }
        if(amount>texts.length){
            amount = texts.length
        }
        setText(texts.slice(0,amount))
        console.log(text);
    }

    return (
        <AppContext.Provider 
        value={{
            handleSubmit,
            handleFonts,
            copyToClipboard,
            setPGraph,
            setShowModal,
            toggleModal,
            showModal,
            copySuccess,
            text,
            font,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export{AppContext,AppProvider}