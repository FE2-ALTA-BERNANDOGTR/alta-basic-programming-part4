console.log('\n');

console.log('PROBLEM 1 PRIMENUMBER \n')
function checkPrimeNum(num) {
  let factor = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      factor++;
    }
  }
  if (factor != 2) {
    return console.log(false)
  } else {
    return console.log(true)
  }
}

checkPrimeNum(1000000007);