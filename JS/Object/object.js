// Object.keys(obj) 객체의 키만 담은 배열을 반환한다.
// Object.values(obj) 객체의 값만 담은 배열을 반환한다.
// Object.entries(obj) [키, 값] 쌍을 담은 배열을 반환한다.

let user = {
  name: "john",
  age: 30,
};

console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'john', 30 ]
console.log(Object.entries(user)); // [ [ 'name', 'john' ], [ 'age', 30 ] ]

// Object.values를 사용하면 프로퍼티 값을 대상으로 원하는 작업을 할 수 있다.
let user1 = {
  name: "violet",
  age: 30,
};

for (let value of Object.values(user1)) {
  console.log(value); // violet  30
}
