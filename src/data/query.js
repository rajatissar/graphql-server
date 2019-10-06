import { GraphQLObjectType, GraphQLString } from 'graphql';

const user_query_input = {
  user_id: {
    type: GraphQLString,
    description: 'user_id of user'
  }
};

const user_query_output = new GraphQLObjectType({
  name: 'user_output',
  description: 'user detail',
  fields: () => {
    return {
      user_name: {
        type: GraphQLString,
        resolve(user) {
          return user.user_name;
        }
      },
      user_email: {
        type: GraphQLString,
        resolve(user) {
          return user.user_email;
        }
      }
    };
  }
});

const user_query = new GraphQLObjectType({
  name: 'query',
  description: 'This is a root query',
  fields: () => {
    return {
      find_user: {
        type: user_query_output,
        args: user_query_input,
        resolve(root, args, req, res) {
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
