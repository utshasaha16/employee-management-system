import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { Navbar } from '../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
    const location = useLocation();
    const isLoginPage = location.pathname.includes('login',) || location.pathname.includes('register');
    return (
        <div>
            <div className='fixed z-10 container'>{isLoginPage || <Navbar></Navbar>}</div>
            <Outlet></Outlet>
            {isLoginPage || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;