import React from 'react';
import Aslider from './Aslider';
import Aproduct from './Aproduct';
import { useLoaderData } from 'react-router-dom';

const Apple = () => {
  const products = useLoaderData();

    const apples = products.filter(p=>p.brand == 'apple');
    
  
    return (
        <div>
          <Aslider></Aslider>
          <div>
            <h1 className="text-emerald-500 font-bold font-slobo text-5xl pt-10 text-center">
                Products
            </h1>
            <div className="grid md:grid-cols-4 gap-5 py-10">
            {
            apples.map(apple=><Aproduct apple={apple}></Aproduct>)
            }
            </div>
          </div>
        </div>
    );
};

export default Apple;