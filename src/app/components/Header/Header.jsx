import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <header className="header mb-5">
            <Link to='/posts' className="header_item">
                <span>BLOG</span>
            </Link>
        </header>
    )
}

export default Header;