// Computed property
// let a = "age";

// const user = {
//   name: "Mike",
//   [a]: 30, // age : 30을 [a] :30이라고 표현 가능
// };

// Object.assign() : 객체복제
// const newUser = Object.assign({}, user); // user의 객체프로퍼티가 {} 에 담긴다
// // console.log(newUser);
// newUser.name = "tom";
// console.log(user.name);//user의 name은 바뀌지않음

// const newUser = Object.assign({ gender: "male" }, user);
// console.log(newUser); // { gender: 'male', name: 'Mike', age: 30 }

// 만약 name : 'tom'과 같이 name객체가 똑같은것은?
// const newUser = Object.assign({ name: "Tom" }, user);
// console.log(newUser); //원래이름의 mike가 나옴

// 여러개도 합칠수있다
// const whoAmI = {
//   name: "Nara",
// };
// const info1 = {
//   age: 26,
// };
// const info2 = {
//   gender: "male",
// };
// console.log(Object.assign(user, info1, info2));

// ==============================================================
// Object.keys() : 키 배열 반환
// const user = {
//   name: "Mike",
//   age: 30,
//   gender: "male",
// };
// console.log(Object.keys(user));
// // Object.value() : 값 배열 반환
// console.log(Object.values(user));
// // Object.entries() : 키/값 배열 반환
// console.log(Object.entries(user));

// ==============================================================
// Object.fromEntries() : 키/값 배열을 객체로
const arr = [
  ["name", "mike"],
  ["age", 30],
  ["gender", "male"],
];
console.log(Object.fromEntries(arr));
