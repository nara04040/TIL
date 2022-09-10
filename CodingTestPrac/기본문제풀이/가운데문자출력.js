// 가운데 문자를 출력하라

function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  for (let x of s) {
    if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1);
  }

  return answer;
}

console.log(solution("study"));
