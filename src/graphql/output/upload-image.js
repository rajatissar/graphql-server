import { GraphQLString, GraphQLObjectType } from 'graphql';

const upload_image_output = new GraphQLObjectType({
  name: 'upload_image_output',
  description: 'upload image detail',
  fields: () => ({
    status: {
      description: 'status',
      type: GraphQLString,
      resolve: (object) => object.status
    }
  })
});

export default upload_image_output;
