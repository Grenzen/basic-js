const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let { repeatTimes, separator, addition, additionRepeatTimes } = options;
  let newStr = '';
  let subStr = '';
  
  if (str === null) {
    str = 'null';
  }

  str = str.toString();
  separator = (separator === undefined) ? '+' : separator;
  repeatTimes = (repeatTimes === undefined) ? 1 : repeatTimes;
  additionRepeatTimes = (additionRepeatTimes === undefined) ? 0 : additionRepeatTimes;
  subStr = sub(options, additionRepeatTimes);
  
  for (let i = 0; i < repeatTimes; i++) {
    
    if (i === 0) {
      newStr = str;
      if (addition !== undefined) {
        newStr = newStr.concat(subStr);
      };
    } else if (i >= 1) {
      newStr = newStr.concat(separator);
      newStr = newStr.concat(str);
      if (addition !== undefined) {
        newStr = newStr.concat(subStr);
      };
    };
  };
  return newStr;
};

function sub(obj, additionRepeatTimes) {
  
  let { addition, additionSeparator } = obj;
  let subStr = '';

  if (addition !== undefined) {
    if (addition === null) {
      addition = 'null';
    } else {
      addition = addition.toString();
    };
  };

	if (addition !== undefined) {
		subStr = addition;
		if (additionRepeatTimes > 1) {

			for (let i = 0; i < additionRepeatTimes - 1; i++) {
				subStr = subStr.concat(additionSeparator, addition);
			};
		};
	};
	return subStr;
};