import React from "react";

// Components
import Jokes from './Jokes';
import Boxes from './Boxes'
import Forms from './Forms'
import Apidata from './Apidata'

const MainContent = () => {

    return (
        <div className="main">
            <div className="react--app">
                <h2>The Jokes App</h2>
                <p>Jokes JSON is rendered so users can vote, in the near future the list will get reordered based on the total score.</p>
                <Jokes />
            </div>
            <div className="react--app">
                <h2>The Boxes App</h2>
                <p>Boxes definition from a JSON. Currently a toggler of state, a Simon game in the near future.</p>
                <Boxes />
            </div>
            <div className="react--app">
                <h2>The Form App</h2>
                <p>Quick example on forms and controlled components</p>
                <Forms />
            </div>
            <div className="react--app">
                <h2>The API Call App</h2>
                <p>Getting data from APIs</p>
                <Apidata />
            </div>
        </div>
    );
}

export default MainContent;