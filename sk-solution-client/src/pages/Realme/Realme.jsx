import React from 'react';
import Rslider from './Rslider';
import Rproducts from './Rproducts';
import { useLoaderData } from 'react-router-dom';

const Realme = () => {
    const products = useLoaderData();

    const apples = products.filter(p=>p.brand == 'realme');
    return (
        <div>
            <Rslider></Rslider>
            <div>
                <h1 className="text-emerald-500 font-bold font-slobo text-5xl pt-10 text-center">
                    Products
                </h1>
                <div className="grid md:grid-cols-4 gap-5 py-10">
                    {
                    apples.map(apple=><Rproducts apple={apple}></Rproducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Realme;