import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/apollo/client';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
