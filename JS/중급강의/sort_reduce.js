/**
 * arr.sort()
 * 배열 재정렬
 * 주의! 배열 자체가 변경됨
 * 인수로 정렬 로직을 담은 함수를 받음
 */

// let arr = [27, 8, 5, 13];

// // 8,27,5,13
// // 5, 8, 27, 13

// function fn(a, b) {
//   return a - b; // 오름차순정리
// }

// arr.sort(fn);

// console.log(arr);

/**
 * arr.reduce()
 * 인수로 함수를 받음
 * (누적 계산값, 현재값) => {return 계산값};
 */

let arr = [1, 2, 3, 4, 5];

// for , for of , forEach

const result = arr.reduce((prev, cur) => {
  return prev + cur;
});

console.log(result);
