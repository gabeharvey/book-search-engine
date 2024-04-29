// Required Imports for Application
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import {setContext} from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import './App.css';
import {Outlet} from 'react-router-dom';

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

// Overall Structure of Application
function App() {
  return (
    <ApolloProvider client={client}>
        <>
          <Navbar />
          <Outlet />
        </>
    </ApolloProvider>
  );
}

export default App;
