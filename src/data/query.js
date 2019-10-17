import { GraphQLObjectType } from 'graphql';
import find_user_input from '../model/input/find-user';
import find_user_output from '../model/output/find-user';

const user_query = new GraphQLObjectType({
  name: 'query',
  description: 'This is a root query',
  fields: () => {
    return {
      find_user: {
        type: find_user_output,
        args: find_user_input,
        resolve(root, args, context) {
          const return_obj = {};
          const { user_id } = args;
          if (user_id === '1') {
            return_obj.user_name = 'Rajat';
          } else if (user_id === '2') {
            return_obj.user_name = 'Samrat';
          } else {
            return_obj.user_name = 'user is not in database';
          }
          return return_obj;
        }
      }
    };
  }
});

export { user_query };
