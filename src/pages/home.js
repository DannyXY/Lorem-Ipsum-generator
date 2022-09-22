import { fonts } from '../data';
import { useRef } from 'react';
import { useGlobalContext } from "../context";

const Home =()=>{
    const {font, handleFonts, handleSubmit, text, copySuccess, copyToClipboard, setPGraph } = useGlobalContext()
    const textAreaRef = useRef(null)
    
    return(
        <>
        <div>
    <div className="flex items-center justify-center h-72">
        <p className="font-Basic mx-4 text-5xl text-center">
            GENERATE LOREM IPSUM TEXT EASY
        </p>
    </div>
        <div>
            <svg className="w-full" viewBox="0 0 1440 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 149.293L60 121.611C120 94.343 240 38.3559 360 49.7607C480 61.1655 600 137.889 720 132.705C840 127.521 960 38.3559 1080 11.0881C1200 -16.5944 1320 16.5832 1380 33.1719L1440 49.7607V248.826H1380C1320 248.826 1200 248.826 1080 248.826C960 248.826 840 248.826 720 248.826C600 248.826 480 248.826 360 248.826C240 248.826 120 248.826 60 248.826H0V149.293Z" fill="black"/>
                </svg>
                
        </div>
    </div>
    <div className="">
    <div className="text-white h-[900px] lg:h-[450px] px-24 relative bottom-1 gap-10 grid grid-col-1 lg:grid-cols-2 justify-center bg-black ">

    <div className="bg-black  mx-auto h-96 ">
        <div className="w-96 mb-14  text-lg font-Basic" >
            <p className="mb-2">SELECT THE FONT YOU PREFER TO VIEW,</p>
            <p className="mb-2">SELECT THE NUMBER OF PARAGRAPH OR LINES,</p>
            <p className="mb-2">CLICK ON GENERATE AND WATCH MAGIC HAPPEN</p>
            <div className="pt-10" style={{fontFamily:font}}>
            <p>THE QUICK FOX JUMPS OVER THE LAZY DOG <br /> the quick fox jumps over the lazy dog</p>
            <p><i>the quick fox jumps over the lazy dog</i></p>
            </div>
        </div>
          <form className="grid grid-cols-4 gap-3 w-96" onSubmit={handleSubmit}>
            <select className="col-span-2 h-8 bg-transparent border border-white" onChange={handleFonts}>
                {fonts.map((font,index)=>{
                    return (
                        <option key={index} style={{fontFamily: font}}>{font}</option>
                    )
                })}
            </select>
            <input className="col-span-1 p-2  h-8 bg-transparent border border-white" 
            onChange={(e) => {
            setPGraph(e.target.value)
            }}
            type='number' placeholder='PARAGRAPHS'/>
            <input className="col-span-1 h-8 bg-transparent border border-white" />
            
                <button className="mt-4 text-center p-4 col-span-4 text-lg bg-green-800">
                GENERATE
                </button>
                </form>

    </div>
    <div className="bg-black h-96 ">
        <div className="w-full border h-full overflow-y-auto p-5 border-white">
            {text.map((pGraphs,index)=>{
                return(
                    <p key={index} ref={textAreaRef} className='pb-2' style={{fontFamily: font}}>{pGraphs}</p>
                )
            })}


    </div>
        <button onClick={copyToClipboard} className={
            copySuccess?
            'bg-white text-green-800 z-50 flex items-center  justify-center text-center w-48 p-2 mt-3 col-span-4 text-lg bg-green-800':
        'z-50 flex items-center  justify-center text-center w-fit p-2 mt-3 col-span-4 text-lg bg-green-800'} >
            <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8125 23.8L4.8125 16.3334L6.15625 14.9L11.8125 20.9334L23.8125 8.13336L25.1562 9.5667L11.8125 23.8Z" fill="#59A577"/>
                </svg> 
            {copySuccess?'COPIED':'COPY TO CLIPBOARD'}
        </button>
    </div>
</div>
<div className="relative -z-50 bottom-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" 
    fillOpacity="1" d="M0,224L1440,32L1440,0L0,0Z"></path>
</svg>
</div>
    </div>
    
    <div className="grid text-7xl font-Basic h-[700px] items-center justify-center item-center text-center">
        <div >
        <p>DANNYX IS COMING</p>
        <p>ANTICIPATE...</p>
    </div>
    </div>
    </>
    )
}

export default Home