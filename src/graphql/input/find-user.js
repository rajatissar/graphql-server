import { GraphQLString, GraphQLEnumType } from 'graphql';

const find_user_input = {
  user_id: {
    description: 'user_id of user',
    type: GraphQLString,
  },
  user_state: {
    description: 'state of user',
    type: new GraphQLEnumType({
      name: 'state_of_user',
      values: {
        haryana: {
          value: 'haryana',
        },
        west_bengal: {
          value: 'west bengal',
        },
        utrakhand: {
          value: 'utrakhand',
        },
        pb: {
          value: 'punjab',
        },
      },
    }),
  },
};

export default find_user_input;
