import users from '../../data.json';

const create_user_resolver = (root, args) => {
  const user = args;
  user.user_id = users.length + 1;
  users.push(user);
  return user;
};

export default create_user_resolver;
