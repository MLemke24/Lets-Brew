import React from 'react';
// import { useQuery } from '@apollo/client';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Instructions from '../Instructions'
import brews from './tempdb'
// import BrewCard from '../Cards'
// import { QUERY_BREW } from "../../utils/queries"
const Brews = () => {
    // const { loading, data} = useQuery(QUERY_BREW);
    // const brews = data?.//whatever the name of the query is
    // function filterBrew(){
    //     //
    // }
    return (
        <Router>
            <div>
                <ul>{brews.map(brew => {
                    return (
                        <div className='Icon'>
                            <Link to={brew.url}>{brew.name}</Link>
                        </div>
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