import { GraphQLSchema } from 'graphql';
import { user_query } from './query';
// import { user_mutation } from './mutation';

const schema = new GraphQLSchema({
  query: user_query
  //   mutation: user_mutation
});

export default schema;
