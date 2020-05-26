import { GraphQLString } from 'graphql';

const find_user_input = {
  user_id: {
    description: 'user_id of user',
    type: GraphQLString,
  },
};

export default find_user_input;
