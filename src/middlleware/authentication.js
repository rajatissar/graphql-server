import jwt from 'jsonwebtoken';

const authenticate_user = async (logging_key, token) => {
  console.log(`${logging_key} - authenticate_user`);
  return new Promise((resolve) => {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return resolve(false);
      }
      return resolve(true);
    });
  });
};

export { authenticate_user };
