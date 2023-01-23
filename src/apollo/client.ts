import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => {
  const isServerSide = typeof window === 'undefined';

  return new ApolloClient({
    ssrMode: isServerSide,
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });
};

export function initializeApollo() {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo() {
  return useMemo(() => initializeApollo(), []);
}
