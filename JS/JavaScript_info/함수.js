// 함수선언

function name(parameter1, parameter2, ...parameterN) {
  // 본문
}

// 지역변수
// 함수 내에서 선언한 변수, 함수안에서만 접근 가능

function a() {
  let message = "hi!";

  console.log(message);
}
a(); // hi!
console.log(message); // ReferenceError

// 외부변수
// 함수 내부에서 외부 변수에 접근 가능한 변수 , 수정도 가능
let name = "John";

function b() {
  let message = "hi , " + name;
  console.log(message);
}

b(); // "hi , John"

// 외부변수 name 내부변수 name이 있다고 가정한다면 함수내부에서 호출한 내부변수만 적용된다.
let name1 = "Johnn";

function b() {
  let name1 = "john";
  let message = "hi , " + name;
  console.log(message);
}

b(); // "hi , john"

// 매개변수
// 매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있다. 매개변수는 인자(parameter)라고 불린다.

function c(from, text) {
  console.log(from + ": " + text);
}
c("Ann", "hello"); // Ann : hello
("");
