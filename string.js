const stringLength = (str) => {
  if (typeof str === 'string') {
    const charLength = str.trim().length;
    if (1 >= charLength <= 10) {
      return charLength;
    } else {
      return 'Invalid character! Too long to too short!';
    }
  } else {
    return 'Value is not a  string'
  }
};

module.exports = stringLength;


