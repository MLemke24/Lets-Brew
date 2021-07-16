import React from 'react';
import { useParams } from 'react-router-dom'


const Instructions = () => {
    
    const { method } = useParams()
    return (
        <div>
            <h1> {method} </h1>
            <p>timer</p>
        </div>
    )
}

export default Instructions;