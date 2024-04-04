import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar navbar-light'>
                <div className='container'>
                    <NavLink className="navbar-brand" to='/'>
                        conduit
                    </NavLink>

                    <ul className="nav navbar-nav pull-xs-right flex-row">

                        <li className="nav-item">

                            <NavLink className="nav-link" to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Sign in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Sign up</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
};

export default Header;