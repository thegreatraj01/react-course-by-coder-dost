import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);
    const changenumber = () => {
        setNumber(number + 1);
        // setNumber(number => number + 1);
        // setNumber(number => number + 1);
        console.log(number);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={changenumber}>Add</button>
        </div>
    )
}

export default Counter