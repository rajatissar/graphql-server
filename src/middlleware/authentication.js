import jwt from 'jsonwebtoken';

const authenticate_user = async (logging_key, token) => {
  console.log(`${logging_key} - authenticate_user - token = ${token}`);
  return new Promise((resolve) => {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        console.log(`${logging_key} - authenticate_user Error- ${err.message}`);
        console.log(err.stack);
        return resolve(false);
      }
      console.log(`${logging_key} - authenticate_user decoded- ${JSON.stringify(decoded)}`);
      return resolve(true);
    });
  });
};

export { authenticate_user };
