module.exports = function getSeason(date) {


  if (!date) return 'Unable to determine the time of year!';
  if (isNaN(date)) throw new Error();// isNaN приводит к числу, true если дата нявляется числом.

  let month = date.getMonth();
  let answer = '';
  if (month == 11 || month == 0 || month == 1) {
    answer = 'winter';
  } else if (month == 2 || month == 3 || month == 4) {
    answer = 'spring';
  } else if (month == 5 || month == 6 || month == 7) {
    answer = 'summer';
  } else if (month == 8 || month == 9 || month == 10) {
    answer = 'fall'
  }
  return answer;
};
