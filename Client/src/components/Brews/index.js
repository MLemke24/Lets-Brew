import React from 'react';
import { BrowserRouter as Router, Link, Route, useParams } from 'react-router-dom'

//require css

const brews = [
    ///provisional use database instead
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
                    //each brew consist of a card with the info form the prop + a link with a path to their server
                    return (
                        // have a widh with white background and round border so translucid img looks
                        <li className='Icon'>
                            <Link to={brew.url}>{brew.name}</Link>
                        </li>
                    )
                })
                }
                </ul>
            </div>
            <Route path='/:method'>
                <Instructions />
            </Route>
        </Router>
    )
}

export default Brews;