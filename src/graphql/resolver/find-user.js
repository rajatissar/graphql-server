import _ from 'lodash';

import { authenticate_user } from '../../middlleware/authentication';
import { authorize_user } from '../../middlleware/authorization';
import users from '../../data.json';

const find_user_resolver = async (obj, args, context, info) => {
  // const cache_user = await context.user_loader.load(0);
  // const cache_users = await context.user_loader.loadMany([2, 1, 3]);
  // console.log(`cache_user - ${JSON.stringify(cache_user)}`);
  // console.log(`cache_users - ${JSON.stringify(cache_users)}`);

  let authentication_token = _.get(context, 'authentication_token', null);
  authentication_token = authentication_token
    && authentication_token.split(' ')[1];
  console.log(`authentication_token - ${authentication_token} - args.token = ${args.token}`);

  const is_authenticated_user = args.is_authenticate
    || (await authenticate_user(null, authentication_token || args.token));
  console.log(`is_authenticated_user - ${is_authenticated_user}`);

  if (!is_authenticated_user && !args.is_authenticate) {
    return {
      status: 'user_not_authenticated',
    };
  }

  const { user_id, user_state } = args;
  let user = {};
  if (user_id) {
    user = args.is_db ? (await context.read_db.query(`SELECT * FROM user WHERE user_id = ${user_id};`, { type: context.read_db.QueryTypes.SELECT })) : users.filter((user_1) => user_1.user_id === user_id);
  } else if (user_state) {
    user = users.filter((user_1) => user_1.user_state === user_state);
  }
  if (user.length) {
    const is_authorized_user = args.is_authorize || (await authorize_user(null, user[0].roles));
    console.log(`is_authorized_user - ${is_authorized_user}`);

    if (!is_authorized_user) {
      return {
        status: 'user_not_authorized',
      };
    }
    return user[0];
  }
  return {};
};

export default find_user_resolver;
