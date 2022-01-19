import React from "react";

const Joke = (props) => {

    return (
        <div>
            {props.joke.q && <h4>Question: {props.joke.q}</h4>}
            <p>Punchline: {props.joke.a}</p>
            <div className="votes">
                <span onClick={props.handleClickPlus} className="material-icons">thumb_up</span>
                <span onClick={props.handleClickRest} className="material-icons">thumb_down</span>
                <span>{props.joke.votes}</span>
            </div>
        </div>
    )
}

export default Joke;