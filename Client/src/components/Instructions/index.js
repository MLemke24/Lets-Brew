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
                <h2>Volumes:</h2>
                <ul>
                    <li>Water :<span> {Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.water)}</span></li>
                    <li>Grind :<span> {Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.grind)}</span></li>
                    <li>Coffee :<span> {Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.weight)}</span></li>
                </ul>
            </div>
            <div>
                <h2>Instructions:</h2>
                <ul>
                    <li>
                        <h4>Step One</h4>
                        <p>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.step1)}</p>
                    </li>
                    <li>
                        <h4>Step Two</h4>
                        <p>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.step2)}</p>
                    </li>
                    <li>
                        <h4>Step Three</h4>
                        <p>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.step3)}</p>
                    </li>
                    <li>
                        <h4>Step Four</h4>
                        <p>{Data.filter(brew => brew.name === brewId).map(filterBrew=> filterBrew.step4)}</p>
                    </li>
                
                </ul>
            </div>
        </div>
    )
}

export default Instructions;