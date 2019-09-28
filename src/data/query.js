import { GraphQLObjectType, GraphQLString } from 'graphql';

const user_query_output = new GraphQLObjectType({
  name: 'user',
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
  name: 'user_query',
  description: 'Simple query to fetch user data',
  fields: () => {
    return {
      query_user: {
        type: user_query_output,
        resolve() {
          return {
            user_name: 'Rajat',
            user_email: 'rajat.kumar@daffodilsw.com'
          };
        }
      }
    };
  }
});

export { user_query };
