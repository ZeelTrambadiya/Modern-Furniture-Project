import React from 'react'
import chair from '../../assets/chair.jpg'

const Contact = () => {
  return (
    <div className='bg-white text-gray-800 font-sans mt-20'>
      <section className='text-center py-10 px-4'>
       <h2 className='text-4xl font-bold mb- text-amber-950'>Contact US</h2>
        <p className='text-gray-600 mb-6 mt-3'>We Are Here To Meet Any business Need And To Promote Your Company Online!
        </p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-12'>
            <div className='text-left space-y-4'>
              <p className='font-bold text-xl text-amber-950'>Phone: (+91) 98765 43210</p>
              <p className='font-bold text-xl text-amber-950'>Email: info@modernfurniture.com</p>
              <p className='font-bold text-xl text-amber-950'>Address : 913, The Capital-2, Science City, Ahmedabad</p>
             </div>
                <div className='w-70 h-70 rounded-full overflow-hidden border-4 border-gray-200 shadow-md'>
                  <img 
                  src={chair}
                  alt="chair"
                  className='w-full h-full object-cover'
                  />

                </div>
          </div>
        
      </section>  
    </div>
  )
}

export default Contact
