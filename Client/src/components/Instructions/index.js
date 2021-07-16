//source :https://www.codegrepper.com/code-examples/javascript/react+filter+array+of+objects+by+name

import React from 'react';
import { useParams } from 'react-router-dom';
import Timer from '../Timer'
import Data from '../Catalog/tempdb'

const Instructions = () => {
    const {brewId} = useParams();
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