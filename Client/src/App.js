import React from "react";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/";
import Home from "./pages/Home";
import Brews from "./components/Brews"
import Instructions from "./components/Instructions";


const httpLink = createHttpLink({
  uri: "/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
           

              <Route exact path="/" component={Home} />
              <Route exact path="/instructions/:brewId" component={Instructions}/>
              <Route exact path="/brews"/>
              <Route exact path="/cups"/>
              <Route exact path="/login" />
              <Route exact path="/signup"/>

            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;