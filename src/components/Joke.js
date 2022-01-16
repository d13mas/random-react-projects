import React from "react";

const Joke = (props) => {
    function handleClick() {
        alert("I've been clicked");
    }

    return (
        <div>
            {props.q && <h3>Setup: {props.q}</h3>}
            <p>Punchline: {props.a}</p>
            <button onClick={ handleClick }>CHOOSE ME</button>
            <hr />
        </div>
    )
}

export default Joke;