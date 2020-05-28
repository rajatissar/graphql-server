import { GraphQLObjectType, GraphQLString } from 'graphql';

const login_user_output_user_name = new GraphQLObjectType({
  description: 'name of user',
  name: 'login_user_output_user_name',
  fields: () => ({
    first: {
      description: 'first name of user',
      type: GraphQLString,
      resolve: (name) => name.first,
    },
    last: {
      description: 'last name of user',
      type: GraphQLString,
      resolve: (name) => name.last,
    },
  }),
});

const login_user_output = new GraphQLObjectType({
  name: 'login_user_output',
  description: 'user detail',
  fields: () => ({
    user_id: {
      description: 'user_id of user',
      type: GraphQLString,
      resolve: (user) => user.user_id,
    },
    user_name: {
      description: 'user_name of user',
      type: login_user_output_user_name,
      resolve: (user) => user.user_name,
    },
    user_email: {
      description: 'user_email of user',
      type: GraphQLString,
      resolve: (user) => user.user_email,
    },
    token: {
      description: 'token for authentication',
      type: GraphQLString,
      resolve: (user) => user.token,
    },
  }),
});

export default login_user_output;
