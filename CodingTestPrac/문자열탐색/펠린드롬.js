// 회문문자열을 영어로하면 팰린드롬이다.
// 팰린드롬이면 yes, 아니면 no를 출력하는 프로그램을 작성해라

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let input = "found7, time: study; yduts; emitu, 7Dnuof";
console.log(solution(input));
