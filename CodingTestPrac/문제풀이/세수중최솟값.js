/**
 * 100이하의 자연수 ABC를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성해라 (정렬은 사용불가능)
 * 입력 6 5 11
 * 출력 5
 */

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}

console.log(solution(6, 5, 3));
