import { GraphQLNonNull, GraphQLString } from 'graphql';

const find_user_input = {
  user_email: {
    descriptionL: 'user email of user',
    type: new GraphQLNonNull(GraphQLString),
  },
  user_password: {
    descriptionL: 'user password of user',
    type: new GraphQLNonNull(GraphQLString),
  },
};

export default find_user_input;
