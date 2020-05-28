import { authenticate_user } from '../../middlleware/authentication';
import users from '../../data.json';

const find_user_resolver = async (obj, args, context, info) => {
  const is_authenticated_user = await authenticate_user(null, args.token);

  if (!is_authenticated_user) {
    return {
      status: 'user_not_authenticated',
    };
  }
  const { user_id, user_state } = args;
  let user = {};
  if (user_id) {
    user = users.filter((user_1) => user_1.user_id === user_id);
  } else if (user_state) {
    user = users.filter((user_1) => user_1.user_state === user_state);
  }
  if (user.length) {
    return user[0];
  }
  return {};
};

export default find_user_resolver;
