import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <ul className='nav-links'>
                <Link className='links' to='/Shopping-Cart/'>
                    <li>Home</li>
                </Link>
                <Link className='links' to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link className='links' to='/about'>
                    <li>About Us</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;