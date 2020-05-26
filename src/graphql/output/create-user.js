import { GraphQLObjectType, GraphQLString } from 'graphql';

const create_user_output_user_name = new GraphQLObjectType({
  name: 'create_user_output_user_name',
  description: 'name of user',
  fields: () => ({
    first: {
      type: GraphQLString,
      resolve: (name) => name.first,
    },
    last: {
      type: GraphQLString,
      resolve: (name) => name.last,
    },
  }),
});

const create_user_output = new GraphQLObjectType({
  name: 'create_user_output',
  description: 'user detail',
  fields: () => ({
    user_id: {
      type: GraphQLString,
      resolve(user) {
        return user.user_id;
      },
    },
    user_name: {
      type: create_user_output_user_name,
      resolve(user) {
        return user.user_name;
      },
    },
    user_email: {
      type: GraphQLString,
      resolve(user) {
        return user.user_email;
      },
    },
  }),
});

export default create_user_output;
