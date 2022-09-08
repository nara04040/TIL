// forEach, map, filter, reduce

// forEach
// function forEach(predicate, thisArg) {
//   for (let i = 0; i < a.length; i++) {
//     predicate(a[i], i);
//   }
// }

// a = [10, 11, 12, 13, 14, 15];
// a.forEach(
//   function (v, i) {
//     console.log(v, i, this);
//   },
//    [1, 2]
// );

//==============================================
// map 각요소를 순회후 배열을 만들어준다.
// a = [10, 11, 12, 13, 14, 15];
// let answer = a.map(
//   function (v, i) {
//     if (v % 2 === 0) return v;
//   },
//   [1, 2]
// );
// console.log(answer);

// =============================================
// filter() 원하는 요소만 뽑아서 배열로 만듬

// a = [10, 11, 12, 13, 14, 15];
// let answer = a.filter(
//   function (v, i) {
//     if (v % 2 === 1) return v;
//   },
//   [1, 2]
// );
// console.log(answer);
// console.log(a);

// =============================================
// reduce() 계산후 어떤 값을 생성

a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function (acc, v) {
  return acc + v;
}, 0);
console.log(answer);
console.log(a);
