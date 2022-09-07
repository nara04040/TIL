/**
 * let , const , var
 */

// var 는 한번 선언된 변수를 다시 선언 가능
// var name = "Mike";
// console.log(name);

// var name = "Jane";
// console.log(name);
// let은 불가능

// var는 선언하기전 사용가능 = 호이스팅
var name;
console.log(name); // undefinde
name = "mike";

// 선언은 호이스팅, 할당은 호이스팅 되지 않음
// 호이스팅 : 스코프 내부 어디서든 변수 선언은 최상위에 선언도니 것 처럼 행동

// TDZ : let, const가 해당
let age = 30;
function showAge() {
  console.log(age);
  let age = 20;
}
showAge();
// 되지않는다.
