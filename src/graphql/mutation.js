import { GraphQLObjectType } from 'graphql';

// input
import create_user_input from './input/create-user';
import login_user_input from './input/login-user';
import upload_image_input from './input/upload-image';
// output
import create_user_output from './output/create-user';
import login_user_output from './output/login-user';
import upload_image_output from './output/upload-image';
// resolver
import create_user_resolver from './resolver/create-user';
import login_user_resolver from './resolver/login-user';
import upload_image_resolver from './resolver/upload-image';

const root_mutation = new GraphQLObjectType({
  name: 'root_mutation',
  description: 'This is the root mutation',
  fields: () => ({
    create_user: {
      description: 'mutation to create a new user',
      type: create_user_output,
      args: create_user_input,
      resolve: create_user_resolver
    },
    login_user: {
      name: 'login_user',
      description: 'mutation to login user',
      type: login_user_output,
      args: login_user_input,
      resolve: login_user_resolver
    },
    upload_image: {
      name: 'upload_image',
      description: 'mutation to upload file',
      type: upload_image_output,
      args: upload_image_input,
      resolve: upload_image_resolver
    }
  })
});

export default root_mutation;
