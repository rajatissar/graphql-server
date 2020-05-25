import { GraphQLObjectType } from 'graphql';
import find_user_input from './input/find-user';
import find_user_output from './output/find-user';
import users from './data.json';

const root_query = new GraphQLObjectType({
  name: 'root_query',
  description: 'This is the root query',
  fields: () => ({
    find_user: {
      type: find_user_output,
      args: find_user_input,
      resolve(root, args) {
        const { user_id } = args;
        const user = users.filter((user_1) => user_1.user_id === user_id);
        if (user.length) {
          return user[0];
        }
        return {};
      },
    },
  }),
});

export { root_query };
