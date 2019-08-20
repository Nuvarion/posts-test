import React from 'react';

import './Spinner.scss';

const Spinner = () => {

    return (
            <div className="lds-css ng-scope d-flex justify-content-center">
                <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <style type="text/css"></style>
            </div>
    );
};


export default Spinner;