import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar__wrapper">
            <div className="navbar">
                <div className="logo">
                    TEMPLATE <span>LOGO</span>
                </div>
            
            <div className="links__wrapper">
                <div className="link__wrapper">
                    <NavLink to="/">Home</NavLink>
                </div>
            </div>
        </div>
    </div>
    )
};
export default NavBar;