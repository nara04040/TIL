// 중복단어제거
/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성해라
 * 출력하는 문자열은 원래의 입력순서를 유지.
 *
 * 첫줄에 자연수 N이 주어짐 (3<=N<=30)
 * 두번째줄부터 N개의 문자열이 주어짐, 문자열의 길이는 100을 넘지않는다.
 */

function solution(s) {
  let answer;
  //   console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    if (s.indexOf(v) === i) return true;
    // return s.indexOf(v) === i; 줄였을 때
  });
  // .fliter(function(){}) : 콜백함수를 만족하는 필터링된 배열을 만들어냄

  return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
