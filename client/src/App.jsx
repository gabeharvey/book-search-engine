// Required Imports for Application
import React from 'react';
import auth from './utils/auth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import {setContext} from '@apollo/client/link/context';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
