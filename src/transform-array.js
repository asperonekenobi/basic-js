module.exports = function transform(arr) {
  let changedArr = [];

  if (!Array.isArray(arr)) {
    throw new Error();
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      i++;
    } else if (arr[i] == '--discard-prev') {
      changedArr.pop();
    } else if (arr[i] == '--double-next') {
      if (i !== arr.length - 1) {
        changedArr.push(arr[i + 1]);
      }
    } else if (arr[i] == '--double-prev') {
      if (i !== 0) {
        changedArr.push(arr[i - 1]);
      }
    } else changedArr.push(arr[i]);
  }
  return changedArr;
};
