import React, { useEffect, useState } from 'react';
import brand1 from '../../assets/images/service/apple.jpg'
import brand2 from '../../assets/images/service/brand2.jpg'
import brand3 from '../../assets/images/service/brand3.jpg'
import brand4 from '../../assets/images/service/brand4.png'
import brand5 from '../../assets/images/service/brand5.jpg'
import brand6 from '../../assets/images/service/brand6.png'

import { Link } from 'react-router-dom';
import Brands from './Brands';


const Brand = () => {

  const [brands,setBrands] = useState([]);

  useEffect(()=>{
    fetch('/brand.json')
    .then(res => res.json())
    .then(data =>setBrands(data))
  },[])
    return (
      
     <div className='font-slobo mt-6'>
        <h1 className='md:text-5xl text-3xl text-center font-semibold py-6'>Choice Your
             <span className='md:text-6xl text-4xl text-emerald-400 font-semibold'> Brands</span>
        </h1>
        <div className='grid md:grid-cols-3 py-10 gap-10'>
            {
              brands.map(brand=><Link to={`/brand/${brand.brand_name}`}><Brands brand={brand}></Brands></Link>)
            }
        </div>
     </div>
    );
};

export default Brand;