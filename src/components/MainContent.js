import React from "react";

// Components
import Jokes from './Jokes';
import Boxes from './Boxes'

const MainContent = () => {

    return (
        <div className="main">
            <div className="react--app">
                <h2>The Jokes App</h2>
                <p>Jokes JSON is rendered so users can vote, and the list gets reordered based on the total score.</p>
                <Jokes />
            </div>
            <div className="react--app">
                <h2>The Boxes App</h2>
                <p>Boxes definition from a JSON. Currently a toggler of state, a Simon game in the near future.</p>
                <Boxes />
            </div>
        </div>
    );
}

export default MainContent;