import React, { Component } from 'react';
import kiwi from '../assets/kiwi.png';


const Header = () => {
    return (
        <div className="jumbotron jumbotron-fluid text-left justify-content-start p-3 mb-1 bg-info">
            <h1 className="display-4">CHIRPER</h1>
            <img src={kiwi} alt="kiwi" className="img-fluid custom" />
            <br /><br />
            <p className="lead">A place for you to share insignificant things about yourself.</p>
        </div>
    )
}

export default Header;