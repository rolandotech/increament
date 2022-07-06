import React, { useState } from 'react';
import { increase } from '../..';

export const Increament = () => {
    const [num, setNum] = useState(0)

    const increase = () => {
        setNum(num++);
    }

    return(
        <div className="container">
        <h1>Increamenting</h1>
        <h4>Number: {num}</h4>
        <button onClick={() => increase() }></button>
        </div>
    )
    
}