import React from 'react';
import Oslider from './Oslider';
import Oproducts from './Oproducts';
import { useLoaderData } from 'react-router-dom';

const Oneplus = () => {
    const products = useLoaderData();

    const apples = products.filter(p=>p.brand == 'oneplus');
    return (
        <div>
            <Oslider></Oslider>
            <div>
                <h1 className="text-emerald-500 font-bold font-slobo text-5xl pt-10 text-center">
                    Products
                </h1>
                <div className="grid md:grid-cols-4 gap-3 py-10">
                    {
                    apples.map(apple=><Oproducts apple={apple}></Oproducts>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Oneplus;