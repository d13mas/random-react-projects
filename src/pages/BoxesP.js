import React from 'react';

import Boxes from '../components/Boxes'

const BoxesP = ({mode}) => {
    return (
        <div className="react--app">
            <h2>The Boxes App</h2>
            <p>Boxes definition from a JSON. Currently a toggler of state, a Simon game in the near future.</p>
            <Boxes mode={ mode } />
        </div>
    );
};

export default BoxesP