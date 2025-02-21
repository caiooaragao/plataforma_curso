import Header from '@/Ui/Components/Header/Header'
import MenuLateral from '@/Ui/Components/MenuLateral/MenuLateral'
import React from 'react'

type StaticScreenProps = {
    children: React.ReactNode
}
const StaticScreen = (props: StaticScreenProps) => {
    return (
        <div className=''>
            <Header />
            <div className="flex flex-row">
                <MenuLateral />
                {props.children}
            </div>


        </div>
    )
}

export default StaticScreen