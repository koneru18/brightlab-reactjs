import { GraphQLString, GraphQLBoolean } from 'graphql';
import LoginType from '../schemas/Login';
import { handlePostRequest, USER_MGMT_BASE_URL } from '../util/Services';

export const login = {
  type: LoginType,
  args: {
    logonId: { type: GraphQLString },
    password: { type: GraphQLString },
    cent: { type: GraphQLBoolean}
  },
  resolve: async (root, args) => {
    const data = await handlePostRequest(await USER_MGMT_BASE_URL() + `/user/v1/users/session`, null, 'POST', args);
    // console.log('data: ', JSON.stringify(data));
    return data;
  }  
};