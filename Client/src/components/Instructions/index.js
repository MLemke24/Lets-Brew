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
            <div>
                <h2>Volume</h2>
                <ul>
                    <li>Water <span>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.water)}</span></li>
                    <li>Grind <span>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.grind)}</span></li>
                    <li>Coffee <span>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.weight)}</span></li>
                </ul>
            </div>
            <div>
                <h2>Steps</h2>
                <ul>
                    <li>
                        <h3>Step One</h3>
                        <p>description of step 1 for {brewId}</p>
                    </li>
                    <li>
                        <h3>Step Two</h3>
                        <p>description of step 2 for {brewId}</p>
                    </li>
                    <li>
                        <h3>Step Three</h3>
                        <p>description of step 3 for {brewId}</p>
                    </li>
                    <li>
                        <h3>Step Four</h3>
                        <p>description of step 4 for {brewId}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Instructions;