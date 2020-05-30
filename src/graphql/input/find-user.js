import { GraphQLString, GraphQLBoolean, GraphQLEnumType } from 'graphql';

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
          description: 'land of milk',
          value: 'haryana',
        },
        west_bengal: {
          description: 'land of bengali',
          value: 'west bengal',
        },
        utrakhand: {
          description: 'land of temples',
          value: 'utrakhand',
        },
        pb: {
          description: 'land of five rivers',
          value: 'punjab',
        },
        up: {
          description: 'land of bahubali',
          value: 'uttar pardesh',
        },
      },
    }),
  },
  token: {
    description: 'JWT token of user',
    type: GraphQLString,
  },
  is_authenticate: {
    description: 'whether user is authenticated or not',
    type: GraphQLBoolean,
  },
  is_authorize: {
    description: 'whether user is authorized or not',
    type: GraphQLBoolean,
  },
};

export default find_user_input;
