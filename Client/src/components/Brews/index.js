import React from 'react';
// import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Instructions from '../Instructions'
import brews from './tempdb'
// import { QUERY_BREW } from "../../utils/queries"
const Brews = () => {
    // const { loading, data} = useQuery(QUERY_BREW);
    // const brews = data?.//whatever the name of the query is
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