import { ApolloClient, InMemoryCache } from '@apollo/client'

const options = {
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
}

const client = new ApolloClient(options)

export default client
