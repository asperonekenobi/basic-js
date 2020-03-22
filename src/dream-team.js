module.exports = function createDreamTeam(members) {
  let teamName = [];
  if (Array.isArray(members) === true) {
    members.forEach(word => {
      if (typeof(word) === 'string') {
        word = word.trim();
        teamName.push(word[0].toUpperCase());
      }
    });
    return teamName.sort().join('');
  } else return false;
};