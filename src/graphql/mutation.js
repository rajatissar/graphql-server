import { GraphQLObjectType } from 'graphql';

import users from '../data.json';
import create_user_input from './input/create-user';
import create_user_output from './output/create-user';
import login_user_input from './input/login-user';
import login_user_output from './output/login-user';
import login_user_resolver from './resolver/login-user';

const root_mutation = new GraphQLObjectType({
  name: 'root_mutation',
  description: 'This is the root mutation',
  fields: () => ({
    create_user: {
      description: 'mutation to create a new user',
      type: create_user_output,
      args: create_user_input,
      resolve: (root, args) => {
        const user = args;
        user.user_id = users.length + 1;
        users.push(user);
        return user;
      },
    },
    login_user: {
      name: 'login_user',
      description: 'mutation to login user',
      type: login_user_output,
      args: login_user_input,
      resolve: login_user_resolver,
    },
  }),
});

export { root_mutation };
