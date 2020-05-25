import { GraphQLObjectType } from 'graphql';
import find_user_input from './input/find-user';
import find_user_output from './output/find-user';

const root_query = new GraphQLObjectType({
  name: 'root_query',
  description: 'This is the root query',
  fields: () => ({
    find_user: {
      type: find_user_output,
      args: find_user_input,
      resolve(root, args) {
        const return_obj = {};
        const { user_id } = args;
        if (user_id === '1') {
          return_obj.user_name = 'Rajat';
        } else if (user_id === '2') {
          return_obj.user_name = 'Samrat';
        } else {
          return_obj.user_name = 'user_not_found';
        }
        return return_obj;
      },
    },
  }),
});

export { root_query };
