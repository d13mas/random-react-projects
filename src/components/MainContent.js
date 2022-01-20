import React from "react";

// Components
import Jokes from './Jokes';
import Boxes from './Boxes'
import Forms from './Forms'
import Apidata from './Apidata'

const MainContent = (props) => {

    return (
        <div className={`main ${props.mode}`}>
            <div className="react--app">
                <h2>The Jokes App</h2>
                <p>Jokes JSON is rendered so users can vote, in the near future the list will get reordered based on the total score.</p>
                <Jokes mode={ props.mode } />
            </div>
            <div className="react--app">
                <h2>The API Call App</h2>
                <p>Getting data from APIs</p>
                <Apidata mode={ props.mode } />
            </div>
            <div className="react--app">
                <h2>The Boxes App</h2>
                <p>Boxes definition from a JSON. Currently a toggler of state, a Simon game in the near future.</p>
                <Boxes mode={ props.mode } />
            </div>
            <div className="react--app">
                <h2>The Form App</h2>
                <p>Quick example on forms and controlled components</p>
                <Forms mode={ props.mode } />
            </div>
        </div>
    );
}

export default MainContent;