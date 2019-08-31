import React from 'react';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator mt-4'>
            <img src='https://images.techhive.com/images/article/2016/04/error-thinkstock-100655502-primary.idge.jpg' alt='error icon' />
            <span className='boom'>BOOM!</span>
            <span>
                Something has gone terribly wrong
            </span>
        </div>
    );
};

export default ErrorIndicator;