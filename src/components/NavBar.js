import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/orders" activeClassName="active">Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/add-order" activeClassName="active">Add Order</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
