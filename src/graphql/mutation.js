import { GraphQLObjectType } from 'graphql';

import create_user_input from './input/create-user';
import create_user_output from './output/create-user';
import users from './data.json';

const root_mutation = new GraphQLObjectType({
  name: 'root_mutation',
  description: 'This is the root mutation',
  fields: () => ({
    create_user: {
      description: 'function to create a new user',
      type: create_user_output,
      args: create_user_input,
      resolve(root, args) {
        const user = args;
        user.user_id = users.length + 1;
        users.push(user);
        return user;
      },
    },
  }),
});

export { root_mutation };
