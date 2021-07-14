import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'


/// are multiple routers supported? this could be done differently
//router for each method

import FrenchPress from '../../pages/french';
import Chemex from '../../pages/chemex';
import AeroPress from '../../pages/aero-press';
import Moka from '../../pages/moka';
import Siphon from '../../pages/siphon';
import Turkish from '../../pages/turkish';
import V60 from '../../pages/v60';
import Vacuum from '../../pages/vacuum';

//main graphhql api endpoint

const httpLink = createHttpLink(
    {
      uri: '/graphql'
    }
  )

  //attach json web tokn

const authLink = setContext((_, {headers}) => {
    //get the auth token from local storage if it exist
    const token = localStorage.getItem('id_token')
    return {
      headers: {
        ...headers, 
        authorization: token ? `Bearer ${token}` : '' 
      }
    }
  })

  
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
   });
  
// a route that redirects for each of the breiwn on click ( chekex, frwench press etc)
function Brews(){
    return (
        <ApolloProvider client={client}>
        <Router>
            <Switch><h1>French Press</h1>
                <Route exact path='/french-press' component={FrenchPress}/>
                <Route exact path='/chemex' component={Chemex}/>
                <Route exact path='/aero-press' component={AeroPress}/>
                <Route exact path='/moka-pot' component={Moka}/>
                <Route exact path='/siphon-press' component={Siphon}/>
                <Route exact path='/turkish-coffee' component={Turkish}/>
                <Route exact path='/v60' component={V60}/>
                <Route exact path='/vaccuum-brewer' components={Vacuum}/>
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
        </Router>

        </ApolloProvider>
    )
}

export default Brews;