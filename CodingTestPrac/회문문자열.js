// 회문 문자열

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}
let str = "goon";
console.log(solution(str));
