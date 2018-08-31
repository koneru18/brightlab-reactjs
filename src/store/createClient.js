import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { loadAccessToken } from '../utils/localStorage';

const httpLink = createHttpLink({
  uri: "/graphql"
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await loadAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "Authorization": token ? token : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;