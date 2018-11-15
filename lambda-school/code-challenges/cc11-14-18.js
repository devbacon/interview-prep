// given equal number
// determine if sum of first half is equal to second

function isLucky(num) {
  // Convert number to string
  var numStr = String(num);

  // Split the number evenly storing each half in its own variable
  var subStrLeng = numStr.length / 2;
  var sub1 = numStr.slice(0, subStrLeng);
  var sub2 = numStr.slice(subStrLeng);

  // Convert halfs to number and calc sums
  var sum1 = sub1.split('').reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
  
  var sum2 = sub2.split('').reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  // Compare if equal and return
  return sum1 === sum2;
}

