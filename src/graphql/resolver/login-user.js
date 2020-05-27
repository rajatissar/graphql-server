import users from '../../data.json';

const login_user_resolver = (obj, args, context, info) => {
  const { user_email } = args;
  let user = {};
  if (user_email) {
    user = users.filter((user_1) => user_1.user_email === user_email);
  }
  if (user.length) {
    return user[0];
  }
  return {};
};

export default login_user_resolver;
