import { GraphQLObjectType, GraphQLString } from 'graphql';

const user_query = new GraphQLObjectType({
  name: 'user_query',
  fields: {
    user_name: {
      type: GraphQLString,
      resolve() {
        return 'Rajat';
      },
      user_email: {
        type: GraphQLString,
        resolve() {
          return 'rajatissar94@gmail.com';
        }
      }
    }
  }
});

export { user_query };
