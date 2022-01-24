import React, { useState } from "react";

import boxesData from '../data/boxes'
import Box from './Box'

const Boxes = ({mode}) => {
    const [boxes, setBoxes] = useState(boxesData)

    const handleClick = (miid) => {
        setBoxes(prevBoxes => {
            return prevBoxes.map((box) => {
                return box.id === miid ? {...box, on: !box.on} : {...box}
            })
        })
    }

    const squareElements = boxes.map(box => (
        <Box
            boxClicked={handleClick}
            key={box.id} 
            id={box.id} 
            box={box}
            mode={mode}
            />
    ))

    return (
        <div className="boxes">
            {squareElements}
        </div>
    )
}

export default Boxes