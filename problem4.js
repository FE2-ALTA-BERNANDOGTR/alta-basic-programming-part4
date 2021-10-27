console.log('PROBLEM 4 REMOVE DUPLICATES \n')

function removeDupe(arr) {

  let removeDupes = arr.reduce(function(prevValue, tempValue) {
    if (prevValue.indexOf(tempValue) === -1) {
      prevValue.push(tempValue)
    } else {
      prevValue.splice(prevValue.indexOf(tempValue), 1)
    }
    return prevValue
  }, [])

  console.log(removeDupes.splice(0,1));
  
}

removeDupe([1,2,3,1,2,3,4]);