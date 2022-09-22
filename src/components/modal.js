import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"

const Modal = ()=>{
    const {setShowModal , showModal } = useGlobalContext()
    const toggleModal = ()=>{
        setShowModal(!showModal)
  
    }
    
return(
    <div className={showModal?'h-full fixed z-[1000] w-fit min-w-[466px] pin overflow-auto top-0 bg-black md:hidden':
        'hidden h-full fixed z-[1000] w-full pin overflow-auto top-0 bg-black md:hidden'}>
        <span className="absolute pin-t pin-b pin-r p-4">
        <svg onClick={ ()=>console.log('hi') } className="h-12 w-12 fill-white text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
    </span>
            <div className="relative p-8 text-lg text-white w-full justify-center items-center h-full max-w-md m-auto gap-20 flex-col flex">
                <Link to={'/'} onClick={()=> {setShowModal(false)}}>
                <p role='button' className='hover:font-bold'>HOME</p>
                </Link>
                <Link to={'/profile'} onClick={()=> {setShowModal(false)}}>
                <p role='button' className='hover:font-bold'>PROFILE</p>
                </Link>
                <Link to={'/about'} onClick={()=> {setShowModal(false)}}>
                <p role='button' className='hover:font-bold'>ABOUT</p>
                </Link>
            </div>
            
    </div>
)}

export default Modal