import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../../components/Home/Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;