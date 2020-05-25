import { GraphQLString } from 'graphql';

const create_user_input = {
  user_id: {
    type: GraphQLString,
    description: 'user_id of user',
  },
  user_name: {
    type: GraphQLString,
    description: 'user_name of user',
  },
  user_email: {
    type: GraphQLString,
    description: 'user_email of user',
  },
};

export default create_user_input;
