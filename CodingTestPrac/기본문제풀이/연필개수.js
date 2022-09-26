/**
 * 연필 1다사는 12자루이다. 학생 1인당 연필을 1자루씩 나누어 준다고할때
 * N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성해라
 *
 * 입력
 * 25
 * 출력
 * 3
 */
/**
 * 필수개념!
 * Math.abs() : 절대값을 반환
 * Math.round() : 소수점 이하를 '반올림'한다.
 * Math.ceil() :  소수점이하를 '올림'한다.
 * Math.floor() : 소수점이하를 '내림'한다.
 * Math.sqrt() : 인수의 제곱근을 반환한다.
 * Math.random() : 부동소수점을 반환한다. => 0부터 1 "미만"
 * Math.pow(base, exponent) : 첫번째 인수(base)를 밑, 두번째 인수를 지수(exponent)로해서 거듭제곱한다.
 * Math.max(...value) : 인수중 가장 큰 수를 반환
 *  => Math.max.apply(null, arr) 또는 Math.max(...arr)
 * Math.min(.vaule) : 인수중 가장 작은 수를 반환한다.
 *  => Math.min.apply(null, arr) 또는 Math.min(...arr)
 *
 */

// 0926 복습
function solution(n) {
  let answer = Math.ceil(n / 12);
  return answer;
}
console.log(solution(178));

// ========================================================
// function solution(n) {
//   let answer = Math.ceil(n / 12);

//   return answer;
// }

// console.log(solution(178));
