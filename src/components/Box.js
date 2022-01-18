import React, { useState } from "react";

const Box = (props) => {
    const [ison, setIson] = useState(props.box.on)

    function handleClick() {
        setIson(prevIson => !prevIson)
    }

    return (
        <div onClick={ handleClick } style={{ backgroundColor: ison ? "#222" : "#e1e1e1" }} className="box" key={props.box.id}></div>
    )
}

export default Box