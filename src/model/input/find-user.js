import { GraphQLString } from 'graphql';

const find_user_input = {
  user_id: {
    type: GraphQLString,
    description: 'user_id of user'
  }
};

export default find_user_input;
