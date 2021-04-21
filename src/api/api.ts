import { ApolloClient, createHttpLink, DefaultOptions, InMemoryCache } from '@apollo/client'

import { API_URL } from '../constants'

const httpLink = createHttpLink({
  uri: API_URL,
})

const cache = new InMemoryCache()

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: defaultOptions,
})

export const clearAPICache = async () => {
  if (client.link) {
    client.clearStore()
  }
}

export default client
