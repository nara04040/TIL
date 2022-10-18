// 예제 1
function getElements() {
  const result = {}; // 이때 const 가 임시 객체역할

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
}

// 위 코드를 밑처럼 만들면 임시객체가 없어진다.
function getElements1() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}
//  ====================================================================
// 예제 2
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}

//  위함수를 이렇게 바꿔보자
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}
// 이때 어떤것을 더 추가할려면 이 getDateTime함수를 한번 더 사용하면 된다.
function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "분 전",
    day: currentDateTime.day + "분 전",
    hour: currentDateTime.hour + "분 전",
  };
}

// ========================================================
// 예제3
function genRandomNumer(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  //   random. 이렇게 누가 건들이면 큰일나기에 함수는 하나의 역할만 하는 함수로 만들어 주는게 좋다

  return randomNumber;
}
