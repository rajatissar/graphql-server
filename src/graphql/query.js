import { GraphQLObjectType } from 'graphql';

import find_user_input from './input/find-user';
import find_user_output from './output/find-user';
import find_user_resolver from './resolver/find-user';

const root_query = new GraphQLObjectType({
  name: 'root_query',
  description: 'This is the root query',
  fields: () => ({
    find_user: {
      name: 'find_user',
      description: 'query to find user',
      type: find_user_output,
      args: find_user_input,
      resolve: find_user_resolver,
    },
  }),
});

export { root_query };
