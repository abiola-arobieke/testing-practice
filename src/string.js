const stringLength = (str) => {
  if (typeof str === 'string') {
    const charLength = str.trim().length;
    if (1 >= charLength <= 10) {
      return charLength;
    } else {
      return 'Invalid character! Too long to too short!';
    }
  } else {
    return 'Value is not a  string';
  }
};

const reverseString = (str) => {
  if (typeof str === 'string') {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  } else {
    return 'Value is not a string!';
  }
};

module.exports = { stringLength, reverseString };
