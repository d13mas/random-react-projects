import React, { useState } from "react";

// Img
import check from '../images/check.png';

const Joke = (props) => {
    const [jokeVotes, setVote] = useState(0)
    const [selectJoke, setSelectJoke] = useState(props.joke.fav)
    
    function handleClickPlus() {
        setVote(prevVotes => prevVotes + 1);
    }

    function handleClickRest() {
        setVote(prevVotes => prevVotes - 1);
    }

    function handleSelectJoke() {
        setSelectJoke(prevSelection => !prevSelection)
    }

    return (
        <div>
            {props.joke.q && <h3>Setup: {props.joke.q}</h3>}
            <p>Punchline: {props.joke.a}</p>
            <div>
                <button onClick={handleClickPlus}>UP VOTE</button>
                <button onClick={handleClickRest}>DOWN VOTE</button>
                <span>{jokeVotes}</span>
            </div>
            <div>
                <button onClick={handleSelectJoke}>Like</button>
                {selectJoke ? <img src={check} alt="check" width="20px" /> : ''}
            </div>
            <hr />
        </div>
    )
}

export default Joke;