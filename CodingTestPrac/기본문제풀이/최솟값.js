/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성해라
 *
 */

function solution(arr) {
  //   let answer,
  //     min = Number.MAX_SAFE_INTEGER;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < min) min = arr[i];
  //   }
  //   answer = min;

  let answer = Math.min(...arr);
  console.log(Math.max(...arr));
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
