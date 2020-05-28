const authorize_user = async (logging_key, role) => {
  if (role === 'admin') {
    return true;
  }
  return false;
};

export { authorize_user };
