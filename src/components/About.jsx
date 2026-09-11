import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Where Living Meets Luxury 
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:gap-20">
        <img src={assets.brand} alt="About Us" className='w-full sm:w-1/2 max-w-lg'/>
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className="text-4xl font-medium text-grey-800">10+</p>
                    <p>Years of Excellence</p>
                </div>
                 <div>
                    <p className="text-4xl font-medium text-grey-800">12+</p>
                    <p>Project Completed</p>
                </div>
                 <div>
                    <p className="text-4xl font-medium text-grey-800">20+</p>
                    <p>Mn. Sq.Ft. Delivered</p>
                </div>
                 <div>
                    <p className="text-4xl font-medium text-grey-800">25+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
<p className="my-10 max-w-lg">Discover beautifully designed homes where luxury meets comfort.
Every property is carefully selected to offer elegance, quality, and a truly exceptional living experience.</p>
<button className="bg-blue-500 text-white px-8 py-3 rounded-full">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
