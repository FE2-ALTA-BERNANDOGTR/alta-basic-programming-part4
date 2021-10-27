console.log('PROBLEM 2 FAST EXPONENTIATION');

function exponent(num, index) {
  let temp = 1;

  for (let i = 0; i < index; i++) {
    let result = num * temp;
    temp = result;
  }
  return console.log(temp);
}

exponent(2, 3);

console.log('\n');