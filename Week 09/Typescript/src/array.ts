function maxValue(arr: number[]) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(maxValue([1, 23, 45, 6, 7, 77]));
