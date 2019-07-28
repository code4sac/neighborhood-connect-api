const Utilities = {
  isProdEnv: () => {
    return (process.env.NODE_ENV === 'production');
  },
  isValueString: (str) => {
    return (typeof(str) === 'string' || str instanceof String);
  },
};

module.exports = {
  utilities: Utilities,
};
