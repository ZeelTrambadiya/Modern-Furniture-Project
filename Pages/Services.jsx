import React from "react";
import living from "../../assets/living.jpg";
import bedroom from "../../assets/bedroom.jpg"
import dining from "../../assets/dining.jpg"
import office from "../../assets/office.jpg"

const Services = () => {
  return (
    <div className="text-center mt-23">
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>

      {/* Living Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="text-center">
          <img
            src={living}
            alt="living"
            className="mx-8 w-full h-90 rounded-lg"
          />
        </div>
        <div className="w-left">
          <h2 className="text-3xl font-bold mb-10 text-amber-950 mt-20">Living Room Sets</h2>
          <h4 className="text-3xl max-w-x ml-6 mt-2">Stylish And Comfortable Sofas, Recliners, And Coffee Tables For Your 
            Living Space.</h4>
        </div>
      </div>
       
       {/* bedroom */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-amber-950 mt-20">Bedroom Furniture</h2>
          <h4 className="text-3xl max-w-x ">Modern Beds, Wardrobes, And Nightstands Built For Comfort And Style</h4>
        </div>
          <div className="text-center">
          <img
            src={bedroom}
            alt="bedroom"
            className="mx-8 w-full h-90 rounded-lg "
          />
          </div>
        </div>

        {/* Dining */}
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            <div className="text-center">
              <img
                src={dining}
                alt="dining"
                className="mx-8 w-full h-90 rounded-lg "
                />
              </div>
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-10 text-amber-950 mt-20">Dining Furniture</h2>
                  <h4 className="text-3xl max-w-x mt-2 ml-6">Elegent Dining Tables And Chair Perfect For Family Meals And
                     Entertainig Guests.</h4>
                </div>
            </div>

        {/* Office */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-10 text-amber-950 mt-20">Office Furniture</h2>
            <h4 className="text-3xl max-w-x mt-2 ml-6">Ergonomic Desks , Chairs, And Storage Solution For Productive 
              Workspaces.</h4>
           </div>
          <div claassName="text-center mr-10">
            <img
            src={office}
            alt="office"
            className="mx-8 w-full h-90 rounded-lg "
            />
          </div>
          </div>
    </div>
  );
};

export default Services;
