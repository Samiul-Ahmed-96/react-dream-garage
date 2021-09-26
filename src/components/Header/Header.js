import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
        <div className="header">
            <div className="header-content">
                <img src={logo} alt="" />
                <h1>Build Your Own Garage</h1>
            </div>
        </div>

        <div className="header-details">
            <h2>A people without a positive history is like a vehicle without an engine</h2>
            <h3>Total Amount : $15000000</h3>
        </div>
        </>
        

    );
};

export default Header;