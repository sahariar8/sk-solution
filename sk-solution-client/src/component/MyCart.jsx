import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const MyCart = () => {

    const loadedCart = useLoaderData();
    const [carts,setCarts] = useState(loadedCart);
    console.log(carts.length)
    return (
        <div className="py-10 bg-[url('/13.jpg')]">
             
             <h1 className="text-emerald-500 font-bold font-slobo text-5xl md:pt-10 text-center py-10">
               My Cart
            </h1>
            {
                carts.length > 0 ? 
                <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr className='text-base font-semibold text-slate-700'>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            carts.map(cart=><Cart cart={cart} carts={carts} setCarts={setCarts}></Cart>)
                        }
                    
                    
                    </tbody>
                </table>
                </div>
                : 
                <h1 className="text-red-600 font-bold font-slobo text-5xl md:pt-10 text-center md:py-56 ">
                  Your Cart Is Empty
               </h1>
            }
        
             
        </div>
    );
};

export default MyCart;