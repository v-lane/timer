const inputArr = process.argv.splice(2);

const alarm = function(array) {

  if (!Array.isArray(array) || !array.length) {
    return
  }

  for (const element of array) {
    if (isNaN(element) || element < 0) {
      return
    }
    setTimeout(() => process.stdout.write('\x07'), element * 1000)
  }
};

alarm(inputArr);

