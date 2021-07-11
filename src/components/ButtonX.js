import React from 'react';
import { Link } from 'react-router-dom';

export const Button = () => {
    
    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className='btn--primary btn--medium'>
                Get Started
            </button>
        </Link>
    )
}
