import { GraphQLSchema } from 'graphql';
import { root_query } from './query';
import { root_mutation } from './mutation';

const schema = new GraphQLSchema({
  query: root_query,
  mutation: root_mutation,
});

export default schema;
