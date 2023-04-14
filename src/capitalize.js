const strUpperCase = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  return firstLetter + str.slice(1);
};

module.exports = strUpperCase;
