import { GraphQLObjectType } from 'graphql';
import find_user_input from './input/find-user';
import find_user_output from './output/find-user';
import users from './data.json';

const root_query = new GraphQLObjectType({
  name: 'root_query',
  description: 'This is the root query',
  fields: () => ({
    find_user: {
      name: 'find_user',
      description: 'query to find user',
      type: find_user_output,
      args: find_user_input,
      resolve: (root, args) => {
        const { user_id, user_state } = args;
        let user = {};
        if (user_id) {
          user = users.filter((user_1) => user_1.user_id === user_id);
        } else if (user_state) {
          user = users.filter((user_1) => user_1.user_state === user_state);
        }
        if (user.length) {
          return user[0];
        }
        return {};
      },
    },
  }),
});

export { root_query };
