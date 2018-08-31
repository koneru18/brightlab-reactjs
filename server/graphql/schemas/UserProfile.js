import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'UserProfile',
  description: 'User Profile Schema',
  fields: {
    userId: {type: GraphQLString},
    labId: {type: GraphQLString},
    labName: {type: GraphQLString},
    logonId: {type: GraphQLString},
    orgId: {type: GraphQLString},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    fullName: {type: GraphQLString},
    email: {type: GraphQLString},
    country: {type: GraphQLString},
    phone: {type: GraphQLString}
  }
});
