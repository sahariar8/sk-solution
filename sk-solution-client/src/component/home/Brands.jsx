import React from 'react';

const Brands = ({brand}) => {
    const {img,brand_name} = brand;
    console.log(brand)
    return (
        <div>
             <div data-aos="flip-up">
        <div className="card card-compact bg-emerald-100 hover:bg-emerald-400 hover:text-white shadow-xl">
          <figure>
            <img
              src={img}
              alt="brand"
              className='h-[225px] w-full'
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-bold font-slobo text-center hover:">{brand_name}</h2>
            
          </div>
        </div>
        </div>
        </div>
    );
};

export default Brands;