import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <span className="navbar-heading">Activity Club</span>
            <span className="navbar-icon"><FontAwesomeIcon icon={faHandHoldingHeart}></FontAwesomeIcon></span>
        </div>
    );
};

export default Header;