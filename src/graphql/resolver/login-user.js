import jwt from 'jsonwebtoken';

import users from '../../data.json';

const login_user_resolver = (obj, args, context, info) => {
  const user = users.filter((user_1) => user_1.user_email === args.user_email);

  if (user.length) {
    const token = jwt.sign(args, 'secret', { expiresIn: 60 * 10 });

    return {
      user: user[0],
      token,
    };
  }
  return {};
};

export default login_user_resolver;
