import React from 'react' 
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png"
import home3 from "../../assets/home3.png"
import home4 from "../../assets/home4.png"
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import product4 from "../../assets/product4.png"

const Home = () => {
  return (
    <div className='text-center'>
        <h2 className='text-8xl font-stretch-extra-condensed mt-30 w-full text-amber-950 mb-2'>STYLISH HOME</h2>
        <p className='text-2xl mr-3 mt-7'>Discover our exclusive furniture collection that combines style, 
          affordability, and quality Make your home a reflection of your personality and taste with our diverse 
          range of pieces.</p>
          
           <div className="text-center flex overflow-x-auto mt-15 space-x-6">
                    <img
                      src={home1}
                      alt="home1"
                      className="mx-8 w-70 mt-9 h-130 rounded-lg"
                    />
                    <img
                      src={home2}
                      alt='home2'
                      className="mx-8 w-70 mt-9 h-80 rounded-lg "
                      />
                    <img
                      src={home3}
                      alt="home3"
                      className="mx-8 w-70 mt-9 h-130 rounded-lg"
                    />
                    <img
                      src={home4}
                      alt="home4"
                      className="mx-8 w-70 mt-9 h-80 rounded-lg"
                    />
                  </div>
                  <div className='mt-15 w-full bg-gray-300'>
                    <h2 className='text-3xl text-amber-950 font-stretch-extra-condensed font-semibold'>All Products</h2>
                   
                    <div className='text-center flex overflow  mt-1 space-x-10'>
                     
                      <div className='text-center'>
                        <img
                        src={product1}
                        alt="product1"
                        className="mx-8 w-60 mt-9 h-70"
                        />
                        <p className='text-xl mt-2'>Coffee Table</p>
                        <p2 className= 'text-xl mt-2 text-right'>$180.00</p2>
                        </div>

                      <div className='text-center'>
                        <img
                        src={product2}
                        alt="product2"
                        className="mx-8 w-60 mt-9 h-70"
                        />
                        <p className='text-xl mt-2 '>Dining Table</p>
                        <p2 className= 'text-xl mt-2'>$300.00</p2>
                        </div>

                        <div className='text-center'>
                        <img
                        src={product3}
                        alt="product3"
                        className="mx-8 w-60 mt-9 h-70"
                        />
                        <p className='text-xl mt-2'>Culinary Organizer</p>
                        <p2 className= 'text-xl mt-2'>$50.00</p2>
                        </div>

                        <div className='text-center'>
                        <img
                        src={product4}
                        alt="product4"
                        className="mx-8 w-60 mt-9 h-70"
                        />
                        <p className='text-xl mt-2'>Wooden Bowls Set</p>
                        <p2 className= 'text-xl mt-2'>$20.00</p2>
                        </div> 
                    </div>

                  </div>
                  <div>
                      <div>
                          <h1 className='text-4xl mt-10 text-left ml-7 font-semibold text-amber-950'>About</h1>
                          <p className='text-xl text-left w-2xl ml-160 mt-2'>Modern Furniture is your go-to online
                            destination for exquisite furniture at competitive prices. We aim to transform your 
                            living spaces with our carefully curated selection of stylish and functional pieces that
                            enhance comfort and aesthetics. 

                          </p>
                      </div>
                  </div>
                  
                <div className='mt-15 w-full'>
                    <h1 className='text-4xl text-left ml-7 font-semibold text-amber-950'>FAQs</h1>
                    <p className='text-xl text-left w-xl ml-7 mt-2'>Have Questions? We have answers. Check out some of the most common queries
                      below.</p>

                  <div className='text-center flex overflow-x-auto mt-1 space-x-6'>
                    <div className='text-center'>
                    <h2 className='text-2xl text-left font-semibold ml-7 mt-15 text-amber-950'>Shipping Information</h2>
                      <p className='text-xl text-left w-3xs ml-7 mt-8'>We Offer fast and reliable shipping services to ensure 
                         your furniture arrives safely and on time. Our dedicated team works diligently to deliver 
                         your orders with care and efficiency. </p>
                     
                      </div>
                      <div>
                    <h3 className='text-2xl text-left font-semibold ml-60 mt-15 text-amber-950'>Return Policy </h3>
                      <p className='text-xl text-left w-3xs ml-60 mt-8 '>Not satisfied your purchase? No worries. 
                        Our flexible return policy allows you to return items hassle-free within a specified period.
                        Your satisfaction is our top priority.</p>
                  </div>
                        <div>
                          <h4 className='text-2xl text-left font-semibold ml-60 mt-15 text-amber-950'>Customer Support</h4>
                            <p className='text-xl text-left w-3xs ml-61 mt-8'>Need assistance? Our friendly Customer
                              Support team is here to help. Reach out to us for any inquiries, feedback, or Support
                              related to your furniture shopping experience.</p>
                        </div>    
                   </div>     
                </div>
                      <div className='text-center flex overflow-x-auto mt-3 space-x-6'>
                          <div>
                          <h1 className='text-4xl text-left ml-7 mt-15 font-semibold text-amber-950'>Contact Us</h1>
                          <p className='text-left mt-5 w-xl text-xl ml-7'>Get in touch with us for any questions, feedback, or assistance.
                            We are here to ensure your shopping experiencewith us is seamless and enjoyable.</p>
                        </div>

                        <div className='mt-30 mr-5'>
                          <p className='text-xl text-left ml-61'>Phone: (+91) 98765 43210</p>
                          <p className='text-xl text-left ml-61'>Email: info@modernfurnitur.com</p>
                          <p className='text-xl text-left ml-61'>Address: 913, The Capital-2, Science city, Ahmedabad</p>
                        </div>
                      </div>
    </div>          
  )
}

export default Home
