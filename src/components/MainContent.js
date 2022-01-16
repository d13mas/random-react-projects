import React from "react";

// Components
import Joke from './Joke';

// Data
import jokesData from '../data/jokesData';

const MainContent = () => {
    const theJokes = jokesData.map(joke => {
        return <Joke q={ joke.q } a={ joke.a } />
    });

    return (
        <div className="main">
            {theJokes}
        </div>
    );
}

export default MainContent;