const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');

  const disNext = '--discard-next';
  const disPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  if (!Array.isArray(arr)) {
    throw new Error('arr is not an Array');
  } else if (!arr.includes(disNext) &&
             !arr.includes(disPrev) &&
             !arr.includes(doubleNext) &&
             !arr.includes(doublePrev)) {
    return arr;
  } else {

    let transformed = arr.slice(0);

    transformed.forEach((el, i) => {
      if (i === 0 && el === disPrev ||
          i === 0 && el === doublePrev) {
        transformed.splice(i, 1);
      } else if (i === transformed.length - 1 && el === disNext ||
                 i === transformed.length - 1 && el === doubleNext) {
        transformed.splice(i);
      } else if (el === disNext) {
        transformed.splice(i, 2);
      } else if (el === disPrev) {
        transformed.splice(i - 1, 2);
      } else if (el === doubleNext) {
        transformed.fill(el[i + 1], i, i + 1);
      } else if (el === doublePrev) {
        transformed.fill(arr[i - 1], i, i + 1);
      }
    });

    return transformed;
  };
};
