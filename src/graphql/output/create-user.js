import { GraphQLObjectType, GraphQLString } from 'graphql';

const create_user_output_user_name = new GraphQLObjectType({
  name: 'create_user_output_user_name',
  description: 'name of user',
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

const create_user_output = new GraphQLObjectType({
  name: 'create_user_output',
  description: 'user data',
  fields: () => ({
    user_id: {
      description: 'user_id of user',
      type: GraphQLString,
      resolve: (user) => user.user_id,
    },
    user_name: {
      description: 'user_name of user',
      type: create_user_output_user_name,
      resolve: (user) => user.user_name,
    },
    user_email: {
      description: 'user_email of user',
      type: GraphQLString,
      resolve: (user) => user.user_email,
    },
  }),
});

export default create_user_output;
