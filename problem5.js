console.log('PROBLEM 5 PAIR SUM \n')

function pairSum(arr, target) {

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i]+arr[j+1] === target) {
        console.log([i,j+1])
      }
    }   
  }
  return;
}

pairSum([1,2,3,4,6,7], 9)