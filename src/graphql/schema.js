import { GraphQLSchema } from 'graphql';
import { root_query } from './query';
import { user_mutation } from './mutation';

const schema = new GraphQLSchema({
  query: root_query,
  mutation: user_mutation,
});

export default schema;
