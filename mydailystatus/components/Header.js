import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return(
        <div className='bg-gray-200 py-4'>
            <h1>
                <img className='h-24 mx-auto' 
                src='/logo.png' 
                alt='Olá FSL!'
                height='60'/>
            </h1>
            <Navbar />
        </div>
    )
}
export default Header