import { GraphQLString } from 'graphql';

const find_user_input = {
  user_email: {
    descriptionL: 'user email of user',
    type: GraphQLString,
  },
  user_password: {
    descriptionL: 'user password of user',
    type: GraphQLString,
  },
};

export default find_user_input;
