/**
 * 큰 수 출력하기
 *
 * N(1 <= N <= 100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성해라 (첫번째 수는 무조건 출력)
 *
 * 첫줄에 자연수 N이 주어지고, 그 다음줄에 N개의 정수가 입력된다.
 */

function solution(s) {
  let answer = "";
  //   answer += s[0];
  for (let i = 1; i < s.length; i++) {
    // 첫번째 글자가 뒤에보다 크다면 answer에 추가
    // console.log(s[i], i, s.indexOf(s[i]));
    if (s[i] > s[i - 1]) {
      answer += s[i];
    }
  }
  let a = answer.split("");
  a.unshift(s[0].toString());
  console.log(a.join(""));
  return answer;
}
let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
