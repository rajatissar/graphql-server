import { GraphQLString, GraphQLInputObjectType } from 'graphql';

const create_user_input_user_name = new GraphQLInputObjectType({
  name: 'create_user_input_user_name',
  description: 'name of user',
  fields: () => ({
    first: {
      type: GraphQLString,
      description: 'first name of user',
    },
    last: {
      type: GraphQLString,
      description: 'last name of user',
    },
  }),
});

const create_user_input = {
  user_id: {
    type: GraphQLString,
    description: 'user_id of user',
  },
  user_name: {
    type: create_user_input_user_name,
    description: 'user_name of user',
  },
  user_email: {
    type: GraphQLString,
    description: 'user_email of user',
  },
};

export default create_user_input;
