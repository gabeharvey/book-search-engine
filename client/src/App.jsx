// Required Imports for Application
import React from 'react';
import auth from './utils/auth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import {setContext} from '@apollo/client/link/context';
import Navbar from './components/Navbar';

// This Establishes Connection to GraphQL Server
const webLink = createHttpLink({uri: '/graphql'});

// This Establishes Authorization Headers
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');
  return{
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// This Creates Apollo Client Instance
const client = new ApolloClient({
  link: authLink.concat(webLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
