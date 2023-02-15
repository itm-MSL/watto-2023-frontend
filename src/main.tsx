import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const link = ApolloLink.from([
  authLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' }),
]);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
