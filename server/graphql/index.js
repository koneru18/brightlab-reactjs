import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import { userProfile } from './queries';
import { login } from './mutations';

const query = new GraphQLObjectType({
  name: 'query',
  description: 'root query object',
  fields: {
    userProfile
  }
});

const mutation = new GraphQLObjectType({
  name: 'mutation',
  description: 'root mutation object',
  fields: {
    login
  }
});

export default new GraphQLSchema({
  query,
  mutation
});
