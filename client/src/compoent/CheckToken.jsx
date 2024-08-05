import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const CheckToken = () => {
    const token = localStorage.getItem('jwtToken');

    return (
        <Link to={token ? '/profile' : '/login'}>
            <FontAwesomeIcon icon={faUserCircle} className='faper' />
        </Link>
    );
};

export default CheckToken;
