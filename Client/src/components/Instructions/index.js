import React from 'react';
import { useParams } from 'react-router-dom'
import Timer from '../Timer'

const Instructions = () => {
    
    const { method } = useParams()
    return (
        <div>
            <h1> {method} </h1>
            <Timer/>
            <div>
                <h2>Volume</h2>
            </div>
            <div>
                <h2>Steps</h2>
                <ul>
                    <li>Step One</li>
                    <li>Step Two</li>
                    <li>Step Three</li>
                    <li>Step Four</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Instructions;