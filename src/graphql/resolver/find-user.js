import users from '../../data.json';

const find_user_resolver = (obj, args, context, info) => {
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
