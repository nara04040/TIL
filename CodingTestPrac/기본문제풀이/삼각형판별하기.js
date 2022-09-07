/**
 * 길이가 서로 다른 ABC 세개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력, 만들수 없으면 "NO"를 출력
 *
 * 입력예제
 * 6 7 11
 *
 * 출력예제
 * YES
 */
function solution(a, b, c) {
  let answer = "yes",
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "no";

  return answer;
}

console.log(solution(6, 7, 11));
