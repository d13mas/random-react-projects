import React from 'react';

import Apidata from '../components/Apidata';

const ApicallP = ({mode}) => {
    return (
        <div className="react--app">
            <h2>The API Call App</h2>
            <p>Getting data from APIs</p>
            <Apidata mode={ mode } />
        </div>

    );
};

export default ApicallP