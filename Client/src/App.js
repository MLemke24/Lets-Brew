import React from "react";

import Home from "./pages/Home";
import Header from "../src/components/Header";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";



import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
            <Route exact path="/" component={Home} />

            
            </Switch>
          </div>

        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
