import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>

        </>
    );
};

export default Root;