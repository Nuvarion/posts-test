import React from 'react';

import Search from 'app_components/Search';
import Filter from 'app_components/Filter';
import Base from 'app_components/Base';

import './HomePage.scss';

const HomePage = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center mb-5">
                <Search />
                <Filter />
            </div>
            
            <Base />
        </>
    );
};

export default HomePage;