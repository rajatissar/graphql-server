import _ from 'lodash';
import {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

const find_user_output_user_name = new GraphQLObjectType({
  description: 'name of user',
  name: 'find_user_output_user_name',
  fields: () => ({
    first: {
      description: 'first name of user',
      type: GraphQLString,
      resolve: (name) => name.first,
    },
    last: {
      description: 'last name of user',
      type: GraphQLString,
      resolve: (name) => name.last,
    },
  }),
});

const friends_args = {
  limit: {
    description: 'limit of friends',
    type: GraphQLInt,
  },
  offset: {
    description: 'offset of friends',
    type: GraphQLInt,
  },
};

const find_user_output = new GraphQLObjectType({
  name: 'find_user_output',
  description: 'user detail',
  fields: () => ({
    user_id: {
      description: 'user_id of user',
      type: GraphQLString,
      resolve: (user) => user.user_id,
    },
    user_name: {
      description: 'user_name of user',
      type: find_user_output_user_name,
      resolve: (user) => user.user_name,
    },
    user_email: {
      description: 'user_email of user',
      type: GraphQLString,
      resolve: (user) => user.user_email,
    },
    friends: {
      description: 'friends of user',
      type: new GraphQLList(find_user_output),
      args: friends_args,
      resolve: (user, args, context, info) => {
        const limit = args.limit || user.friends.length;
        const offset = args.offset || 0;
        const offset_array = _.drop(user.friends, offset);
        return _.take(offset_array, limit);
      },
    },
    status: {
      description: 'status of user (authentication)',
      type: GraphQLString,
      resolve: (user) => user.status,
    },
  }),
});

export default find_user_output;
