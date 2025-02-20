"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faDog } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';


const MenuLateral = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)

    return (
        <aside className={`bg-slate-600 h-screen ${isMenuOpen === true ? "w-64" : "w-12"} transition-all duration-500 ease-in-out overflow-hidden`}>
            <div className='p-3'>
                <div className='flex flex-row justify-between items-center '>
                    <div className={`${!isMenuOpen ? "hidden" : ""} text-lg text-slate-100`}>Trilhas disponíveis</div>
                    <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-slate-50 cursor-pointer text-xl' icon={isMenuOpen ? faArrowLeft : faArrowRight} />
                </div>
            </div>
        </aside>
    )
}

export default MenuLateral