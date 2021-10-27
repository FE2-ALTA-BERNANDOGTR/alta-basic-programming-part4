console.log('PROBLEM 3 JOIN REMOVE DUPE \n')

function joinRemoveDupe(arr1, arr2) {
  let joinArr = arr1.concat(arr2)

  let removeDupes = joinArr.reduce(function(prevValue, tempValue) {
    if (prevValue.indexOf(tempValue) === -1) {
      prevValue.push(tempValue)
    }
    return prevValue
  }, [])
  console.log(removeDupes);
}

joinRemoveDupe(['a','b','f','d','a'], ['c','d','e','f','b']);