import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <Link to="/" className="uk-navbar-item uk-logo">My Todo
                    </Link>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/create">
                                <samp uk-icon="icon: plus; ratio: 1.2"></samp>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;