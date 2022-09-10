// 첫줄에 대문자로 통일된 문자열을 도출하라

function solution(s) {
  let answer = "";
  //   for (let x of s) {
  //     if (x === x.toLowerCase()) answer += x.toUpperCase();
  //     else answer += x;
  //   }

  // 아스키코드 사용
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}
let str = "ItisTimeToStudy";
console.log(solution(str));
