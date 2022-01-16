import React from "react";

// Components
import Joke from './Joke';

// Data
import jokesData from '../data/jokesData';

const MainContent = () => {
    const theJokes = jokesData.map(joke => {
        return <Joke joke={ joke } />
    });

    return (
        <div className="main">
            {theJokes}
        </div>
    );
}

export default MainContent;