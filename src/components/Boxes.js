import React, { useState } from "react";

import boxesData from '../data/boxes'
import Box from './Box'

const Boxes = (props) => {
    const [boxes, setBoxes] = useState(boxesData)

    // function handleClick() {
    //     setBoxes(prevBoxes =>
    //         (...prevBoxes)
    //         prevBoxes.on = !prevBoxes.on)
    // }

    const squareElements = boxes.map(box => (
        <Box box={box} />
    ))

    return (
        <div className="boxes">
            {squareElements}
        </div>
    )
}

export default Boxes