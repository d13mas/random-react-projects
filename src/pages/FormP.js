import React from 'react';

import Forms from '../components/Forms'

const FormP = ({mode}) => {
    return (
        <div className="react--app">
            <h2>The Form App</h2>
            <p>Quick example on forms and controlled components</p>
            <Forms mode={ mode } />
        </div>
    );
};

export default FormP