import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "../../css/Main.module.css";

export default function Navbar() {
    return (
        <div className="navbarMainDiv">
            <nav className="container mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="logo">
                    <NavLink className={(navData) => navData.isActive ? classes.notAct : classes.notAct} to="/home">
                        <img src="/images/logo.png" alt="compnayLogo"></img>
                    </NavLink>
                </div>



                {/* Menu */}
                <div className="menu">
                    <ul className="flex items-center">

                        <li className="ml-6" >

                            <NavLink className={(navData) => navData.isActive ? classes.active : classes.notAct} to="/menu">Menu</NavLink>

                        </li>
                        <li className="ml-6" >

                            <NavLink className={(navData) => navData.isActive ? classes.active : classes.notAct} to="/offers">Offers</NavLink>

                        </li>
                        <li className="ml-6" >
                            <NavLink className={(navData) => navData.isActive ? classes.active : classes.notAct} to="/signup">Register</NavLink>
                        </li>

                        <li className="ml-6" >

                            <NavLink className={(navData) => navData.isActive ? classes.active : classes.notAct} to="/login">Login</NavLink>

                        </li>
                        <li className="ml-6" >

                            <NavLink className={(navData) => navData.isActive ? classes.active : classes.notAct} to="/cart">
                                <img src="/images/cart.png" alt="cart" />

                            </NavLink>

                        </li>


                    </ul>
                </div>


            </nav>

        </div>
    )
}
