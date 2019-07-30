module.exports = {
  isProdEnv: () => {
    return (process.env.NODE_ENV === 'production');
  },
  isValueString: (str) => {
    return (typeof(str) === 'string' || str instanceof String);
  },
  dbValueStringify: (field) => {
    return ((field === null) ? 'null' : `'${field}'`);
  },
};
