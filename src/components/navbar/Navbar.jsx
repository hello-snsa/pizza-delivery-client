import React from 'react'

export default function Navbar() {
    return (
        <div className="navbarMainDiv">
            <nav className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="logo">
                    <img src="/images/logo.png" alt="compnayLogo"></img>
                </div>
                {/* Menu */}
                <div className="menu">
                    <ul className="flex items-center">

                        <li className="ml-6" ><a href="#">Menu</a></li>
                        <li className="ml-6" ><a href="#">Offers</a></li>
                        <li className="ml-6" ><a href="#">Register</a></li>
                        <li className="ml-6" ><a href="#">Login</a></li>
                        <li className="ml-6" ><a href="#" className="inline-block px-4 py-2" ><img src="/images/cart.png" alt="cart" /></a></li>


                    </ul>
                </div>


            </nav>

        </div>
    )
}
