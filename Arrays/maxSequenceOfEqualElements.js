function maxSequenceOfEqualElements(arr) {
  let maxCount = 1;
  let maxNum = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
      maxNum = arr[i];
    }
  }
  console.log((maxNum + ' ').repeat(maxCount));
}

//maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
//maxSequenceOfEqualElements([4, 4, 4, 4]);
//maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
