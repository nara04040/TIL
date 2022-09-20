let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3, 1 이 나오게 하는 filterRange function을 짜라 이말이구나
console.log(arr);

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

/**
 * 1. filter함수는 원본을 바꾸지 않는다.
 * 2.
 */
