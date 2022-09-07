// String Methods

// 1. toUpperCase() , toLowerCase()

// 2. str.indexOf(text)
// let desc = "Hi guys. Nice to meet you.";

// desc.indexOf("to");
// desc.indexOf("man");

// if (desc.indexOf("Hi")) {
//   console.log("Hi가 포함되어있습니다");
// }

// 3. str.slice(n,m)
// n : 시작점 , m : 없으면 문자열 끝까지 , 양수면 그 숫자까지, 음수면 끝에서부서 센다.
// let desc = "abcdefg";

// console.log(desc.slice(2));
// console.log(desc.slice(0, 5));
// console.log(desc.slice(2, -2));

// 4. str.substring(n,m) : n과 m사이 문자열 반환, n이랑 m바꿔도 동작 ,  음수는 0으로 인식
// let desc = "abcdefg";

// console.log(desc.substring(2, 5));
// console.log(desc.substring(5, 2));

// 5. str.substr(n,m) : n부터 m개를 가져옴
// let desc = "abcdefg";

// console.log(desc.substr(2, 4));
// console.log(desc.substr(-4, 2));

// 6. str.trim(): 앞 뒤 공백 제거
// let desc = "            coding               ";

// console.log(desc.trim());

// 7. str.repeat(n) : 문자열을 n번 반복
// let hello = "hello!";
// console.log(hello.repeat(3));

// ex1)
// let list = [
//   "01. 들어가며",
//   "02. JS의 역사",
//   "03. 자료형",
//   "04. 함수",
//   "05. 배열",
// ];
// let newList = [];
// for (let i = 0; i < list.length; i++) {
//   newList.push(list[i].slice(4));
// }
// console.log(newList);

//  ex2) 금직어 : 콜라
function hasCola(str) {
  if (str.indexOf("콜라")) {
    console.log("금칙어가있습니다");
  } else {
    console.log("통과");
  }
}

hasCola("사이다가 짱짱");
hasCola("콜라 사이다가 짱짱");
hasCola("콜라가 짱짱");
