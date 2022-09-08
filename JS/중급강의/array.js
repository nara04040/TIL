/**
 * 1. concat () - 배열 합치기
 * array.concat([value1[,value2[, ...[,valueN]]]])
 *  - 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
 *  - 기존 배열이나 값을 변경시키지 않는다.
 */

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6];
// let arr3 = [7, 8];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr3));

// ================================================================
/**
 * 2. push, unshift - 배열에 항목 추가하기
 *  - push() : 배열 끝에 항목추가
 *  - unshift() : 배열 앞에 항목 추가
 * 반환값 : 호출한 배열의 새로운 length속성
 * 기존 배열을 변경시킨다.
 */

// let arr = ["가", "나", "다"];

// console.log(arr.push("라"));
// console.log(arr); // 기존배열이 변한다
// console.log(arr.unshift("카"));

// ================================================================
/**
 *  3. pop, shift - 배열에서 항목 제거하기
 *  pop() : 배열 끝에 항목제거
 *  shift() : 배열 앞에 항목제거
 * 반환값 : 제거한 항목
 * 기존배열을 변경시킨다.
 */

// let arr = ["가", "나", "다"];

// console.log(arr.pop());
// console.log(arr); // 기존배열을 바꾼다
// console.log(arr.shift());

// ================================================================
/**
 *  splice() - 배열 요소를 삭제 또는 교체, 추가
 * array.splice(start [, deleteCount [, item1 [, item2 [, ...]]]])
 *
 * start : 배열 변경을 시작할 인덱스
 * deleteCount : 배열에서 삭제할 요소의 수
 * item1, item2, ...  : 배열에 추가할요소 (아무 요소가 없으면 배열에 추가하지않고 삭제만한다)
 * 반환 값 : 제거한 요소를 담은 배열
 * 기존 배열을 변경시킨다.
 */

// let arr = ["가", "나", "다", "라"];
// console.log(arr.splice(2, 1, "마"));
// console.log(arr);
// console.log(arr.splice(1, 0, "바")); // 추가만
// console.log(arr);
// console.log(arr.splice(0, 2));
// console.log(arr);

// ===================================================================
/**
 * slice() - 배열의 일부분으로 새로운 배열 만들기
 * arr.slice([begin[, end]])
 * 배열의  begin 부터 end - 1까지 대한 얕은 복사본을 새로운 배열 객체로 반환
 * 기존 배열을 변경시키지 않는다
 */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(2, 5));
// console.log(arr);

/**
 * length : 배열의 길이
 */

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);

//===============================================================
/**
 * 7. fill() - 특정 값으로 배열 채우기
 * arr.fill(value[, start[, end]])
 *
 * 배열의 start인덱스 부터 end - 1 인덱스 까지 정적인 값 하나로 채운다.
 * start, end 값이 없을 경우  value값으로 배열을 채운다.
 * 기존 배열을 바꾼다
 */

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.fill(0));
// console.log(arr.fill(1, 1, 3));
// console.log(arr.fill(5, 2));

// =============================================================
/**
 * 8. includes() - 배열에 요소 포함 여부 확인하기
 * arr.includes(valueToFind [, fromIndex])
 * fromIndex : 이 배열에서 검색을 시작할 위치 , 기본값은 0
 */

// let names = ["Jessie", "Justin", "Leah"];

// console.log(names.includes("nara"));
// console.log(names.includes("Jessie"));

// =============================================================
/**
 * 9. join() - 배열을 문자열로 결합하기
 * arr.join([separator = ',']);
 *  - separator : 배열을 문자열로 결합할때 이어 붙일 값 (기본값 = ,)
 *  - 기존 배열을 변경시키지 않는다.
 */

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join(""));

// =============================================================

/**
 * 10. filter() - 조건을 만족하는 요소들로 새로운 배열 만들기
 * arr.filter(callback(element[, index[, array]])[, thisArg])
 *  - element : 처리할 현재 요소
 *  - index : 처리할 현재 요소의 인덱스
 *  - array : filter를 호출한 배열
 *  - thisArg : callback을 사용할때 this로 사용하는 값
 */
// let scores = [30, 40, 60, 75, 90];
// let resultScores = [];

// resultScores = scores.filter((scores) => {
//   return scores > 70;
// });
// console.log(resultScores);

// =============================================================

/**
 * map() - 함수를 실행한 결과로 새로운 배열 만들기
 * arr.map(callback(element[, index[, array]]) [, thisArg])
 * element : 처리할 현재 요소
 * index : 처리할 현재 요소의 인덱스
 * array : map을 호출할 배열
 * thisArg : callback을 사용할때 this로 사용하는 값
 *
 * map , filter 은 유사하다.
 * filter는 조건을 만족하는 요소를 필터릴할때 사용, map은 요소가 아닌 새로운 값을 만들어서 return
 * 기존 배열을 변경시키지 않는다.
 */

// let arr = [1, 2, 3, 4, 5];
// let resultArr = [];

// resultArr = arr.map((item) => {
//   return item ** 2;
// });

// console.log(resultArr); // [1, 4, 9, 16, 25]
// console.log(arr); // [1, 2, 3, 4, 5]

/**
 * sort() - 배열 정렬
 * arr.sort([compareFunction])
 * compareFunction : 정렬 순서를 정의하는 함수, 생략하면 배열은 각 요소의 문자열 변환에 따라 유니코드, 포인트값에따라 정렬
 * 기존 배열을 변경시킨다.
 */
// let arr = [1, 2, 100, 10, 222, 3];

// // 유니코드에 따라 정렬
// arr.sort();
// console.log(arr); // [1, 10, 100, 2, 222, 3]

// // 오름차순 정렬
// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr); // [1, 2, 3, 10, 100, 222]

// // 내림차순 정렬
// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr); // [222, 100, 10, 3, 2, 1]

/**
 * reverse() - 배열을 역순으로 정렬하기
 * arr.reverse()
 * 기존 배열을 변경시킨다.
 */

// let arr = [4, 2, 3, 5, 1];

// arr.reverse();
// console.log(arr); // [1, 5, 3, 2, 4]

// arr.forEach(fn) : 배열 반복
// let users = ["Mike", "Tom", "Jane"];
// users.forEach((name, index) => {
//   console.log(`${index + 1}. ${name}`);
// });

// arr.indexOf / arr.lastIndexOf
// let arr = [1, 2, 3, 4, 5, 1, 2, 3];
// console.log(arr.indexOf(3));
// console.log(arr.indexOf(3, 3)); // 3에서 출발해서 3이나올때까지 index번호
// console.log(arr.lastIndexOf(3)); //끝에서부터 index번호

// arr.includes(); // 요소가 있는지없는지 판단, true false

// ex1)
// let arr = [1, 2, 3, 4, 5];

// const result = arr.find((item) => {
//   return item % 2 === 0;
// });
// console.log(result);

// ex2)
// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Nara", age: 10 },
// ];

// const result = userList.findIndex((user) => {
//   if (user.age < 19) {
//     return true;
//   }
//   return false;
// });

// console.log(result);

// arr.filter (fn) 만족하는 모든 요소를 배열로 반환
// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(result);

// arr.reverse() : 역순을 재정렬

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse());

// arr.map(fn) 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 20 },
//   { name: "Tom", age: 10 },
// ];

// let newUserList = userList.map((user, index) => {
//   return Object.assign({}, user, {
//     id: index + 1,
//     isAdult: user.age > 19,
//   });
// });
// console.log(newUserList);
// console.log(userList);

// let arr = ["hi", "im", "nara"];
// let result = arr.join("=");
// console.log(result);

// const users = "Mike, Jane, Tom, Tony";
// const result = users.split(",");

// console.log(result);

let user = {
  name: "Mike",
  age: 30,
};
let userList = ["Mike", "Tom", "Jane"];
console.log(typeof user);
console.log(typeof userList);
console.log(Array.isArray(user));
console.log(Array.isArray(userList));
