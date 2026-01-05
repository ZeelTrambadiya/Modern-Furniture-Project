import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-amber-950 mt-6 max-full mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

      <div>
        <h2 className="text-xl text-yellow-600 font-bold mt-4 mb-4 ml-8">Modern Furniture</h2>
        <p className=" text-gray-400 ml-8">Premium Quality Furniture for modern homes. Designed  with comfort and 
          elegance in mind.</p>
      </div>

      <div>
          <h3 className="text-xl text-yellow-600 font-bold mt-4 mb-4 ml-23">Quick Links</h3>
          <ul className="list-none ml-17">
            <li className="text-gray-400 ml-7"><Link to="/">• Home Page</Link></li>
            <li className="text-gray-400 ml-7"><Link to="/about">• About Us</Link></li>
            <li className="text-gray-400 ml-7"><Link to="/services">• Services</Link></li>
            <li className="text-gray-400 ml-7"><Link to="/contact">• Contact Us</Link></li>
            
          </ul>
      </div>

          <div>
            <h3 className="text-xl text-yellow-600 font-bold mt-4 mb-4 ml-6">Our Services</h3>
            <p className='text-gray-400 ml-6'>Living Rooms Sets</p>
            <p className='text-gray-400 ml-6'>Bedroom Furniture</p>
            <p className='text-gray-400 ml-6'>Dining Furniture</p>
            <p className='text-gray-400 ml-6'>Office Furniture</p>
          </div>

          <div>
            <h3 className="text-xl text-yellow-600 font-bold mt-4 mb-4">Contact Us</h3>
            <p className="text-gray-400">Phone: 98765 43210</p>
            <p className="text-gray-400">Email: info@modernfurniture.com</p>
            <p className='text-gray-400'>Address: 913, The Capital-2, Science city, Ahmedabad</p>
          </div>

            <div className='mt-10 border-t border-gray-700 pt-6 text-center text-gray-400'>
                © 2025 Modern Furniture. All rights reserved.
            </div> 
    </div>
  )
}

export default Footer
