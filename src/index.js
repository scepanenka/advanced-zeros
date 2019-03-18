module.exports = function getZerosCount(number, base) {
  function isPrimeNumber(num) {

    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }

  function getMultipliers(base) {
    const multipliers = [];

    for (let i = 2, j = 0; i <= base; i++ , j++) {

      if (isPrimeNumber(i) && base % i === 0) {
        multipliers.push({ number: [], power: 0 });

        while (base % i === 0) {
          base /= i;
          multipliers[j].number[0] = i;
          multipliers[j].power++;
        }
      } else {
        j--;
      }
    }
    return multipliers;
  }

  function getResult(number, multipliers) {
    let legendreComponents = [];

    for (var j = 0; j < multipliers.length; j++) {
      let count = 0;

      for (let i = 1; i <= number; i++) {
        let int = Math.floor(number / Math.pow(multipliers[j].number[0], i));

        if (int >= 1) {
          count += int;
        } else {
          break;
        }
      }
      legendreComponents.push(Math.floor(count / multipliers[j].power));
    }
    return Math.min(...legendreComponents);
  }

  return getResult(number, getMultipliers(base));
}