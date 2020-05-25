import { GraphQLObjectType, GraphQLString } from 'graphql';

const find_user_output = new GraphQLObjectType({
  name: 'user_output',
  description: 'user detail',
  fields: () => ({
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
  })
});

export default find_user_output;
