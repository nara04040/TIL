// 객체로 이뤄진 배열이 있다고 생각해보자.
// 특정 조건에 부합하는 객체를 배열 내에서 찾을 때 사용하는 메서드가 find이다.

/*
let result = arr.find(function (item, index, array) {
  // true가 반환되면 반복이 멈추고 해당 요소를 반환한다.
  // 조건에 해당하는 요소가 없으면 undefined를 반환한다.
});
* */

// 밑 코드에서 배열안에 id === 1인 조건을 충족하는 객체를 찾아보자.

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);
console.log(user.name); // John
