const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  //! variant 1 isn't limited to 30ms, it's 56ms
  // const result = matrix.flat().filter(item => item === '^^');
  // return result.length; - 56ms

  //! variant 2 isn't limited to 30ms, it's 55ms
  // let i = [];

  // if (matrix.length === 0) {
	// 	return 0;
	// }

	// const res = matrix.reduce(function(acc, curr) {
		
	// 	if (typeof acc !== 'undefined') {
	// 		i = [...i, ...acc];
	// 	};
	// 	i = [...i, ...curr];
	// });
  // return i.filter(item => item === '^^').length;
  
  //!variant 3 is limited to 30ms

  let count = 0;
    
  for(let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === '^^') {
        count++;
      }
    };
  };
  return count;
};
