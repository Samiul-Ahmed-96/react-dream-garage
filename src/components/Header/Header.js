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
            <h2>Make An Awesome garage for you</h2>
            <p>Total Amount : $15000000</p>
        </div>
        </>
        

    );
};

export default Header;