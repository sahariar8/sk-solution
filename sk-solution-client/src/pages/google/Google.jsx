import React from 'react';
import icon from '../../assets/icon.png'

const Google = () => {
    return (
        <div className='py-32  shadow-lg'>
            <img src={icon} alt="" className='h-[250px] mx-auto' />
            <h1 className='text-red-700 font-bold font-slobo md:text-5xl text-center pt-6'>Oops.</h1>
            <h2 className='text-center font-bold text-3xl text-slate-600 font-slobo pt-2'>Products Not Available Right Now.</h2>
        </div>
    );
};

export default Google;