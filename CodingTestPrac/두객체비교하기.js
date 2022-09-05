const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1,
  },
};

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    f: -1,
    e: null,
  },
};
console.log(
  Object.entries(obj1).toString() === Object.entries(obj2).toString()
);
// js의 객체는 참조타입 , 직접적으로 비교가 불가능.
// obj1 === obj2가 불가능이다.
//  1. json을 활용하겠다
// stringify => 모든것을 문자열로 묶어준다.
// function isEqual(objA, objB) {
//   let a = JSON.stringify(objA);
//   let b = JSON.stringify(objB);

//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// // .split().sort().join("")

// console.log(isEqual(obj1, obj2));

//  2. Object, Array활용

// function isEqual(objA, objB) {
//   const checkObjects =
//     objA && objB && typeof objA === "object" && typeof objB === "object";

//   if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
//     return Object.keys(objA).reduce((equal, key) => {
//       return equal && isEqual(objA[key], objB[key]);
//     }, true);
//   } else {
//     return objA === objB;
//   }
// }

// console.log(isEqual(obj1, obj2));
