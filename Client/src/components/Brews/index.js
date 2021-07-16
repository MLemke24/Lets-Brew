import React from 'react';
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom'
//require css

const brews = [
    ///provisional use database instead//fetch from  db
    {
        id: 1,
        name: "french press",
        url: "/french-press",
    },
    {
        id: 2,
        name: "italian press",
        url: "/italian-press",
    },
    {
        id: 3,
        name: "german press",
        url: "/german-press",
    }
]
const Instructions = () => {
    const { method } = useParams()
    return (
        <div>
            <h1> {method} </h1>
            <p>timer</p>
        </div>
    )
}
const Brews = () => {
    return (
        <Router>
            <div>
                <ul>{brews.map(brew => {
                    return (
                        <li className='Icon'>
                            <Link to={brew.url}>{brew.name}</Link>
                        </li>
                    )})}
                </ul>
            </div>
            <Route path='/:method'>
                <Instructions />
            </Route>
        </Router>
    )
}

export default Brews;