// splice
// 배열중 요소 하나만 지우고싶다면!
// arr.splice(index[, deleteCount, elem1, ..., elemN])

// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1);
// // 1번째 인덱스 넘버에서 1개를 지워라
// console.log(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(0, 3, "Let's", "dance");
// // 인덱스 넘버 0에서부터 3개를 지우고 "Let's", "dance" 요소를 넣어라
// console.log(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];
// let remove = arr.splice(0, 2);
// console.log(remove); // "I", "study"

// ================================================================
// slice
// 기존의 배열을 건들이지 않는다.
//  이 메서드는 "start" 인덱스부터 ("end"를 제외한) "end"인덱스까지의 요소를 복사한 새로운  배열을 반환합니다.
// Array.slice([start], [end])

// let arr = ["t", "e", "s", "t"];
// console.log(arr.slice(1, 3));

// ================================================================
// concat
// 기존 배열의 요소를 활용해서 새로운 배열을 만들거나 배열에 요소를 추가하고자할때
// arr.concat(arg1, arg2...)
// let arr = [1, 2];
// console.log(arr.concat([3, 4]));
// console.log(arr); // 원본 배열은 바뀌지않는다.

// concat은 배열의 요소를 복사해서 활용하기에 객체가 인자로 넘어오면 객체는 분해되지않고 통으로 복사되어 더해진다.

// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: 1,
// };
// console.log(arr.concat(arrayLike));

// 이때 유사배열 객체에 Symbol.isConcatSpreadable 가 있으면 객체를 배열처럼 취급한다. 그래서 객체 프로퍼티 값이 더해진다.Symbol

// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   1: "else",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };
// console.log(arr.concat(arrayLike)); // [ 1, 2, 'something', 'else' ]

// ======================================================================
// forEach
// 주어진 함수를 배열 요소 각각에 대해 실행하능하도록 해줌
// Array.forEach(function(item, index, array))

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   console.log(`${item} is at index ${index} in ${array}`);
// });

// ====================== 배열 탐색 ==================================

// indexOf(item, from)
// 인덱스 from으로 시작해서 item(요소)를 찾습니다. 발견하면 반환하고, 못하면 -1를 반환

// arr.lastIndexOf(item, from)
// 위 메서드와 동일한 기능을 하는데, 검색을 끝에서부터 시작한다는 점만 다르다.

// arr.includes(item, from)
// 인덱스 from으로 시작해 item이 있는지를 검색, 해당하는 요소가 있다면 true를 반환한다.

// let arr = [1, 0, false];
// console.log(arr.indexOf(0)); // 1
// console.log(arr.indexOf(null)); // -1
// console.log(arr.includes(1)); // true

// ** includes는 NaN도 처리하므로 indexOf와는 다른점이있다.

//===============================================================
// find , findeIndex
// 특정 조건에 부합하는 '객체'를 배열 내에서 찾을때
// let result = arr.find(function(item, index,array){
//     // true가 반환하면 반복이 멈추고 해당 요소를 반환
//     // 조건에 해당하는 요소가 없으면 undefined를 반환
// })

// 요소를 전체를 대상으로 함수가 순찿적으로 호출
//  - item : 함수를 호출할 요소를 호출
//  - index : 요소의 인덱스
//  - array : 배열 자기자신

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let user = users.find((item) => item.id == 1);
// console.log(user.name);

// ===========================================================================
// filter
// filter는 조거에 맞는 요소 전체를 담은 '배열'을 반환
// let results = arr.filter(function (item, index, array) {
//   // 조건을 충족하는 요소는 results에 순차적으로 더해진다.
//   // 조거을 충족하는 요소가 없으면 빈 배열을 반환
// });

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let someUser = users.filter((item) => item.id < 4);
console.log(someUser);

// ======================= 배열을 변형시키는 메서드들 ===================================
// map
// 배열 요소 전체를 대상으로 함수를 호출, 결과를 '배열'로 반환
// let result = arr.map(function(item, index,array){
//     // 요소 대신 새로운 값을 반환
// })

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
// console.log(lengths);

// =========================================================================
// sort(fn)
// 배열의 요소를 정렬해준다. "배열  자체가 변경된다!"
// let arr = [1, 2, 15];
// arr.sort();
// console.log(arr); // 1,15,2로 정렬?
// 이처럼 정렬된이유는 요소가 문자열로 취급되었기때문이다.
// 해결방안
// function compare(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// let arr = [1, 2, 15];
// arr.sort(compare);
// console.log(arr);

// let arr = [1, 155, 15];
arr.sort((a, b) => a - b); // 오름차순 정렬
console.log(arr);
// 화살표함수로 간단하게 표현하자

// ======================================================================
// reverse
// arr 요소를 역순으로 정렬
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);

// ======================================================================
// split
// 구분자를 기준으로 문자열을 쪼개준다
// let names = "Bilbo, Gandalf, Nazgul";
// let arr = names.split(", ");
// for (let name of arr) {
//   console.log(`${name} 에게 보내는 메세지`);
// }

// let arr = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);
// console.log(arr); // Bilbo, Gandalf

// 한글자씩 분리하기
// let str = "test";
// console.log(str.split(""));

// ======================================================================
// join
// split과 반대의 역할, 배열 요소를 모두 합친후 하나의 문자열을 만들어준다.

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let str = arr.join(";");
// console.log(str);

// ======================================================================

// reduce
// 배열을 기반으로 값 하나를 도출할때 사용
// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// 인수로 넘겨주는 함수는 배열의 모든 요소를 대항으로 차례대로 적용하는데 다음 함수 호출시 사용된다

// accumulator : 이전 함수 호출의 결과, initial은 함수 최초 호출시 사용되는 초깃값을 나타냄
// item – 현재 배열 요소
// index – 요소의 위치
// array – 배열

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);

// ======================================================================
// Array.isArray
// 자바스크립트에서의 배열은 객체형에 속한다.
// 고로 typeof로는 일반 객체와 배열을 구분할수없다.
// 이때 사용하는 메서드가 Array.isArray이다.
// console.log(Array.isArray({}));
// console.log(Array.isArray([]));

// ======================================================================
// 배열 메서드는 thisArg라는 매개변수를 옵션으로 받을 수 있다.

// Array.find(func, thisArg);
// Array.filter(func, thisArg);
// Array.map(func, thisArg);

// thisArg는 func에 this가 된다.
// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };

// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// let soldiers = users.filter(army.canJoin, army);

// console.log(soldiers.length);
// console.log(soldiers[0].age);
