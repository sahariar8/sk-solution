import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/home/Navbar';
import Footer from '../component/home/Footer';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
           <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;