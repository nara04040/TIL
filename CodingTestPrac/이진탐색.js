/**
 * 이진탐색 (Binary Search)
 *  - 정렬된 리스트에 사용되는 탐색 알고리즘
 *  - 리스트에서 탐색범위를 절반씩 좁혀가면서 특정 값을 찾을때 사용
 *  - 속도가 빠르고 효율적.
 */

/**
 * 접근방식
 * 1. Target 값이 중간값보다 작으면 중간값을 기준으로 좌측 아이템들을 탐색
 * 2. Target 값이 중간값보다 크면 우측 아이템들을 탐색
 * 3. 같은 방법으로 선택된 중간값을 비교
 * 4. 해당값을 찾을때 까지 이과정을 반복
 */

/**
 * Pseudo code
 *  fn binarySearch(A,T) is
 *  Low : =0
 *  High := n-1
 *      while Low <= High do
 *      middle := floor((Low + High) / 2)
 *      if t < A[middle] then
 *          high := middle -1
 *          else if T > A[middle] then
 *              Low := middle + 1
 *          else :
 *              return middle
 *      return -1
 */

// arr = 돌면서 찾을 배열, target = 찾고자하는값
// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     let middle = Math.floor((low + high) / 2);
//     if (target < arr[middle]) {
//       high = middle - 1;
//     } else if (target > arr[middle]) {
//       low = middle + 1;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([10, 20, 30, 40, 55, 70], 55));
// console.log(binarySearch([10, 20, 50, 70, 90, 110], 100));

// ================================================================
const binarySearch = (list, target, left, right) => {
  let mid = 0;

  while (left <= right) {
    // 가운데인덱스
    mid = Math.floor((left + right) / 2);

    if (list[mid] === target) {
      return mid;
    }

    // 대소 비교로 범위 지정
    if (list[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

const sample = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10];

// 오름차순으로 차례대로 만들어준다.
sample.sort((a, b) => a - b);

const result = binarySearch(sample, 7, 0, sample.length - 1);
console.log(result);
