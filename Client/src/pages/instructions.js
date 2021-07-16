import React from 'react'
import Brew from '../components/Cards/Brew'
import { useMutation, useQuery } from '@apollo/client'
//import queries here for data fetching 

//here is the page for each method

const Instructions = () =>{
    return (
        <div>
            <Brew data={data.data}/>
            <h2>timer</h2>
            <div>Timer icon</div>
            <button>start</button>
            <button>stop</button>
            <h3>Volume</h3>
            <ul>
                <h3>Steps</h3>
                <li>step1</li>
                <li>step2</li>
                <li>step3</li>
            </ul>
        </div>
    )
}

export default Instructions;
