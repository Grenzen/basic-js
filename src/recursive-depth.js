const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth = (arr) => {

    if (Array.isArray(arr)) {
      if (arr[0] === undefined) {
        return 1;
      }
      return 1 + Math.max(...arr.map(this.calculateDepth));
    }
    return 0;
  };
};