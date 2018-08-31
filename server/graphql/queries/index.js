import { GraphQLString } from 'graphql';
import UserProfileType from '../schemas/UserProfile';
import { handleGetRequest } from '../util/Services';

export const userProfile = {
  type: UserProfileType,
  args: {
    authorization: { type: GraphQLString }
  },
  resolve: (root, args, ctx) => handleGetRequest('/user/v1/users/me', args.authorization, 'GET')
};