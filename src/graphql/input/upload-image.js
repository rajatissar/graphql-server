import { GraphQLUpload } from 'graphql-upload';

const upload_image_input = {
  image: {
    description: 'image file',
    type: GraphQLUpload
  }
};

export default upload_image_input;
