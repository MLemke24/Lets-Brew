//source :https://www.codegrepper.com/code-examples/javascript/react+filter+array+of+objects+by+name

import React from 'react';
import { useParams } from 'react-router-dom';
import Timer from '../Timer'
import Data from '../../db/tempdb'

const Instructions = () => {
    const { brewId } = useParams();

    return (<>
        {Data.filter(brew => brew.name === brewId).map(filterBrew => {
            return (<>
                <h1> Brewing : {brewId} </h1>
                <Timer />
                <div>
                    <h2>Strenght : </h2>
                    <h4>{filterBrew.strength}</h4>
                </div>
                <div>
                    <h2>Volumes:</h2>
                    <ul>
                        <li>Water :<span> {filterBrew.water}</span></li>
                        <li>Grind :<span> {filterBrew.grind}</span></li>
                        <li>Coffee :<span> {filterBrew.weight}</span></li>
                    </ul>
                </div>
                <div>
                    <h2>Instructions:</h2>
                    <ul>
                        <li>
                            <h4>Step One</h4>
                            <p>{filterBrew.step1}</p>
                        </li>
                        <li>
                            <h4>Step Two</h4>
                            <p>{filterBrew.step2}</p>
                        </li>
                        <li>
                            <h4>Step Three</h4>
                            <p>{filterBrew.step3}</p>
                        </li>
                        <li>
                            <h4>Step Four</h4>
                            <p>{filterBrew.step4}</p>
                        </li>
                    </ul>
                </div>
            </>

            )
        })}
    </>)
}

export default Instructions;