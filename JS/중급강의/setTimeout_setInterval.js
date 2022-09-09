// 3초뒤에 콘솔에 찍어줘!
// function fn() {
//   console.log(3);
// }

// setTimeout(fn, 3000);
// 이거를
// 이렇게 쓸수있다~
// setTimeout(function () {
//   console.log(3);
// }, 3000);

// clearTimeout
// const tId = function showName(name) {
//   console.log(name);
// };
// setTimeout(showName, 3000, "Mike");
// clearTimeout(tId);

// setInterval : 함수는 주기적으로 인자를 실행해준다.
// function showName(name) {
//   console.log(name);
// }

// const tId = setInterval(showName, 3000, "Mike");

// setInterval, clearInterval 예제
let num = 0;

function showTime() {
  console.log(`접속한지 ${num++}가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}

// setInterval(showTime, 1000);

const tId = setInterval(showTime, 1000);
