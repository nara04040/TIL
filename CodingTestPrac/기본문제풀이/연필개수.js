/**
 * 연필 1다사는 12자루이다. 학생 1인당 연필을 1자루씩 나누어 준다고할때
 * N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성해라
 *
 * 입력
 * 25
 * 출력
 * 3
 */

function solution(n) {
  let answer = Math.ceil(n / 12);

  return answer;
}

console.log(solution(178));
