import React from 'react';
import new1 from '/awatch.jpg'

const Banner = () => {
    return (
      <div className="bg-[url('/banner.jpg')] bg-cover bg-center">
        <div className="hero bg-slate-800 bg-opacity-50">
          <div className="hero-content flex-col lg:flex-row">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
                <img src={new1} className="md:max-w-sm rounded-lg shadow-2xl" />
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
            <div className="md:py-40 text-white">
              <h1 className="text-3xl md:text-5xl font-rancho font-bold text-center ">Your Source for <span className='text-emerald-600'>Tech Essentials!</span></h1>
              <p className="py-6 px-8 text-sm md:text-base md:px-20">
              Explore a world of innovation and convenience at <span className='text-orange-500 font-bold text-lg'>Sk solution</span>. Discover the latest gadgets, top-quality electrical essentials, and expert guidance for all your tech needs.
              </p>
              <div data-aos="fade-up"data-aos-duration="3000">
              <h3 className='text-2xl md:text-3xl font-semibold font-rancho text-center'>Explore Your gadgets <span className='text-emerald-600'>World</span></h3>
              </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    );
};

export default Banner;