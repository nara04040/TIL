// 회문 문자열

// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   if (s.split("").reverse().join("") !== s) return "NO";
//   return answer;
// }
// let str = "goon";
// console.log(solution(str));

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return "No";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
