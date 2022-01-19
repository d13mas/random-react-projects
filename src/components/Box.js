import React from "react";

const Box = (props) => {
    const styles = {
        backgroundColor: props.box.on ? "#222222" : "#FFFFFF"
    }

    return (
        <div
            className="box"
            onClick={() => props.boxClicked(props.id)}
            style={styles}
        ></div>
    )
}

export default Box