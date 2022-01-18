import React from "react";

// Components
import Joke from './Joke';
import Boxes from './Boxes'

// Data
import jokesData from '../data/jokesData';

const MainContent = () => {
    const theJokes = jokesData.map(joke => {
        return <Joke joke={ joke } />
    });

    return (
        <div className="main">
            <Boxes />
            {theJokes}
        </div>
    );
}

export default MainContent;