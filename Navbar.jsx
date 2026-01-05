import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full"> 
        <div className='flex justify-between items-center p-4 bg-white shadow'>
        
          <h1 className='text-3xl text-yellow-600 font-bold'>Modern Furniture</h1>
          <div className='space-x-2'>
            <Link to='/'>
            <button className='px-4 py-2 bg-yellow-600 text-white rounded hover:bg-amber-950'>Home</button>
            </Link>
            <Link to='/About'>
            <button className='px-4 py-2 bg-yellow-600 text-white rounded hover:bg-amber-950'>About</button>
            </Link>
            <Link to='/Services'>
            <button className='px-4 py-2 bg-yellow-600 text-white rounded hover:bg-amber-950'>Service</button>
            </Link>
            <Link to='/Contact'>
            <button className='px-4 py-2 bg-yellow-600 text-white rounded hover:bg-amber-950'>Contact</button>
            </Link>
          </div>
        </div>
        </nav>
  )
}
export default Navbar