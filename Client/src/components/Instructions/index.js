import React from 'react';
import { useParams } from 'react-router-dom';
import Timer from '../Timer'
import Data from '../Catalog/tempdb'
const Instructions = () => {
    const {brewId} = useParams();
    //now that we have captured the param, we can use it to render their correpsondent items
    
    return (
        <div>
            <h1> Brewing : {brewId} </h1>
            <Timer/>
            <div>
                <h2>Strenght : </h2>
                <h4>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.strength)}</h4>
            </div>
        </div>
    )
}

export default Instructions;