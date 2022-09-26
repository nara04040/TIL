/**
 * 100이하의 자연수 ABC를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성해라 (정렬은 사용불가능)
 * 입력 6 5 11
 * 출력 5
 */

// function solution(a, b, c) {
//   let answer;
//   if (a < b) answer = a;
//   else answer = b;
//   if (c < answer) answer = c;

//   return answer;
// }

// console.log(solution(6, 5, 3));
// ============================복습==================================
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a; // 만약 a가 b보다 작다면 answer은 a이다.
  else answer = b; // 만약 b가 a보다 크다면 answer은 b이다.
  // 이 둘다 아니면?
  if (c < answer) answer = c;
  return answer;
}
console.log(solution(6, 5, 11));
