import React from 'react';
import './header.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log('Header => ', props);
    return (
        <header className='header'>
            <nav className='nav'>
                <li className='nav-item'>
                    <NavLink
                        to='/'
                        exact
                        activeClassName='li-active'
                    >
                        Home
                    </NavLink>
                </li>

                <li className='nav-item'>
                    <NavLink
                        to='/user-form'
                        exact
                        activeClassName='li-active'
                    >
                        Client
                    </NavLink>
                </li>

                <li className='nav-item'>

                    <NavLink
                        to='/masters'
                        exact
                        activeClassName='li-active'
                    >
                        Master
                    </NavLink>
                </li>
            </nav>
        </header>
    );
};

export default Header;