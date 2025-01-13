import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='p-20 text-center'>
            <h1 className='text-4xl font-bold mb-20'>React Basic Projects - WITHOUT AI!!!</h1>
            <div className='text-2xl text-blue-500 flex flex-col gap-6'>
                <Link to='/1' className='hover:text-blue-800 duration-200'>Typing Speed checker - I</Link>
                <Link to='/2' className='hover:text-blue-800 duration-200'>StopWatch - E</Link>
                <Link to='/3' className='hover:text-blue-800 duration-200'>To-do List(a) - I</Link>
                <Link to='/4' className='hover:text-blue-800 duration-200'>To-do List(b) - E</Link>
                <Link to='/5' className='hover:text-blue-800 duration-200'>Book Finder - I</Link>
                <Link to='/6' className='hover:text-blue-800 duration-200'>Recipe Finder - E</Link>
            </div>
        </div>
    )
}

export default Homepage
