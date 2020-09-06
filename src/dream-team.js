const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let crypt = [];

  if (!Array.isArray(members)) {
		return false;
  } else {
	  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] !== 'string') continue;
		  let trimmed = members[i].trim();
		  crypt.push(trimmed[0].toUpperCase());
	  };
    return crypt.sort().join('');
  };
};
