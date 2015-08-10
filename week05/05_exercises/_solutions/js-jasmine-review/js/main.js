function largestNumber(arr){
  var largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function oddNumbers(num) {
  var bucket = [];
  if (num > 40) {
    if (num % 2 == 0) {
      num++;
    }
    for(i = num; i < 100; i += 2) {
      bucket.push(i);
    }
    return bucket;
  } else {
    return num;
  }
}

module.exports = {
  largestNumber: largestNumber,
  oddNumbers: oddNumbers
};
