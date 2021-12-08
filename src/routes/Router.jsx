import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Product from './Product'


export default function Router() {

    return (
        <div className="routeMainDiv">

            <div className="routesNav">

                <Navbar />
            </div>


            <div className="routesContent">

                <Routes >

                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/menu" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                </Routes >
            </div>


        </div>
    )
}
