const CustomError = require("../extensions/custom-error");

//! доделать отлов ошибок и разобраться с последним пунктом с ловушками

module.exports = function getSeason(date) {

  if (date === undefined) {
    return `Unable to determine the time of year!`;
  } else if (date instanceof Date === false) {
    throw new Error('Ooops');
  } else if (date.getUTCFullYear()) {
    let month = date.getMonth();
    
    return  result = month === 11 || month >= 0 && month <= 1 ?
    `winter` : month >= 2 && month <= 4 ? 
    `spring` : month >= 5 && month <= 7 ?
    `summer` : `autumn`;
  };
};
