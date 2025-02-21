import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
    return (
        <div className='h-12 bg-slate-50 flex items-center'>
            <nav className='w-screen'>
                <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input style={{ width: "400px" }} type="text" placeholder='pesquisar por qualquer curso' name="" id="" />
                </div>
            </nav>
        </div>
    )
}

export default Header