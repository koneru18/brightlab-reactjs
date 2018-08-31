import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
  } from 'graphql';
  
  export default new GraphQLObjectType({
    name: 'Login',
    description: 'Login Schema',
    fields: {
      sessionId: {type: GraphQLString},
      logonId: {type: GraphQLString},
      userId: {type: GraphQLString},
      lastAccessedTime: {type: GraphQLInt},
      timeToLive: {type: GraphQLInt},
      timezone: {type: GraphQLString}
    }
  });
  