import React from 'react';
import Jokes from '../components/Jokes'

const JokesP = ({mode}) => (
    <div className="react--app">
        <h2>The Jokes App</h2>
        <p>Jokes JSON is rendered so users can vote, in the near future the list will get reordered based on the total score.</p>
        <Jokes mode={ mode } />
    </div>

);

export default JokesP