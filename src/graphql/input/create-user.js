import { GraphQLString, GraphQLInputObjectType } from 'graphql';

const create_user_input_user_name = new GraphQLInputObjectType({
  name: 'create_user_input_user_name',
  description: 'name of user',
  fields: () => ({
    first: {
      description: 'first name of user',
      type: GraphQLString,
    },
    last: {
      description: 'last name of user',
      type: GraphQLString,
    },
  }),
});

const create_user_input = {
  user_id: {
    description: 'user_id of user',
    type: GraphQLString,
  },
  user_name: {
    description: 'user_name of user',
    type: create_user_input_user_name,
  },
  user_email: {
    description: 'user_email of user',
    type: GraphQLString,
  },
};

export default create_user_input;
