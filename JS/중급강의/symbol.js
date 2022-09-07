// const a = Symbol();
// const b = Symbol();

// console.log(a);
// console.log(b);

// console.log(a === b);
// console.log(a == b);

// Symbol : 유일성 보장
// const id = Symbol("id");
// const id2 = Symbol("id");
// console.log(id, id2);
// console.log(id === id2);
// console.log(id == id2);

// ========================================

// const id = Symbol("id");
// const user = {
//   name: "mike",
//   age: 30,
//   [id]: "myid",
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const user = {
//   name: "Mkie",
//   age: 30,
// };
// const id = Symbol("id");
// user[id] = "myid";

// console.log(id);

// ===================================================
// 다른 개발자가 만든 객체
const user = {
  name: "Mike",
  age: 30,
};

// 내작업
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};
user[showName]();

// 사용자가 접속하면 보는 페이지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
