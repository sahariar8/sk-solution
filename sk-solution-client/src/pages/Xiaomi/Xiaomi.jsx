import React from 'react';
import Xslider from './Xslider';
import Xproducts from './Xproducts';
import { useLoaderData } from 'react-router-dom';

const Xiaomi = () => {
    const products = useLoaderData();

    const apples = products.filter(p=>p.brand == 'xiaomi');
    return (
        <div>
            <Xslider></Xslider>
            <div>
                <h1 className="text-emerald-500 font-bold font-slobo text-5xl pt-10 text-center">
                    Products
                </h1>
                <div className="grid md:grid-cols-4 gap-5 py-10">
                    {
                    apples.map(apple=><Xproducts apple={apple}></Xproducts>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Xiaomi;