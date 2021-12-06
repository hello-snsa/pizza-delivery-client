import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Home from './Home'
import Product from './Product'


export default function Routes() {
    return (
        <div className="routeMainDiv">
            <div className="routesNav">

                <Navbar />
            </div>
            <div className="routesContent">
                <Home />
                <Product />

            </div>
        </div>
    )
}