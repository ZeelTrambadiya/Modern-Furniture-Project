import React from 'react'
import about from "../../assets/about.jpg"

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-35">
              <div className="text-center">
              <img
                src={about}
                alt="about"
                className="mx-8 w-full h-120 rounded-lg"
              />
            </div>
            <div className="w-left">
              <h2 className="text-3xl font-bold mb-10 mt-1 ml-60 text-amber-950">About US</h2>
              <h4 className="text-3xl max-w-x ml-15 mt-2 font-semibold text-amber-950">Our Vision</h4>
                <p className='text-xl ml-15 mt-5'>Our Vission is to be a leading international furniture manufacture 
              offering innovative and superior quality Products. This statement reflects our purpose and anticipation
              of our future, inspiring factors that drive us forward in providing the best service in the industry,
              right from design to delivery.</p>
             
              <h4 className='text-3xl max-w-x ml-15 mt-5 font-semibold text-amber-950'>Our Mission</h4>
                <p className='text-xl ml-15 mt-3'>Our mission is to create value for our customers through 
                  Reliability and Flexibility. We want our customers to experience the warmth and comfort through
                  Respect and Trust.</p>
            </div>
          </div>
  )
}

export default About
