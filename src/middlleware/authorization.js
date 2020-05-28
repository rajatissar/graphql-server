const authorize_user = async (logging_key, roles) => {
  if (roles.includes('admin')) {
    return true;
  }
  return false;
};

export { authorize_user };
