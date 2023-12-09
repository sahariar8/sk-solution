import React from 'react';
import Sslider from './Sslider';
import Sproduct from './Sproduct';
import { useLoaderData } from 'react-router-dom';

const Samsung = () => {

    const products = useLoaderData();

    const apples = products.filter(p=>p.brand == 'samsung');

    return (
        <div>
            
            <Sslider></Sslider>
            <div>
                <h1 className="text-emerald-500 font-bold font-slobo text-5xl pt-10 text-center">
                    Products
                </h1>
                <div className="grid md:grid-cols-4 gap-5 py-10">
                    {
                    apples.map(apple=><Sproduct apple={apple}></Sproduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Samsung;