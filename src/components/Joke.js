import React from "react";

const Joke = ({joke, handleClickPlus, handleClickRest}) => (
    <div>
        {joke.q && <h4>Question: {joke.q}</h4>}
        <p>Punchline: {joke.a}</p>
        <div className="votes">
            <span onClick={handleClickPlus} className="material-icons">thumb_up</span>
            <span onClick={handleClickRest} className="material-icons">thumb_down</span>
            <span>{joke.votes}</span>
        </div>
    </div>
)

export default Joke;