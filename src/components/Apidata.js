import React, { useState, useEffect } from "react";

const Apidata = (props) => {
    const [data, setData] = useState("")

    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=IMdcZaC2StHdCWRDOroYIB3dFAnCy5tkTWwAYDOy")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default Apidata