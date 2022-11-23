// Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다.

// Array생성자 함수는 전달된 인수의 개수에 따라 다르게 동작한다.

const arr = new Array(10);
console.log(arr); // [ <10 empty items> ]
console.log(arr.length); // 10

// 이때 생성된 배열은 희소 배열이다. length 프로퍼티 값은 0이 아니지만 실제로 배열의 요소는 존재하지 않는다.

console.log(Object.getOwnPropertyDescriptor(arr));
// 배열은 최대 2^32 - 1 (4,294,967,295)개를 가질 수 있다.
// 따라서 Array 생성자 함수에 전달할 인수는 0 또는 2^32 - 1 (4,294,967,295) 이하의 양의 정수가 되어야한다.

new Array(4294967296); // RangeError

// 전달된 인수가 없을때는 빈 배열을 생성한다. === []
new Array(); // []

// 전달된 인수가 2개 이상이거나 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.

new Array(1, 2, 3); // [1,2,3]

new Array({}); // [{}]

// Array 생성자 함수는 new 연산자와 함께 호출하지 않아도, 생성자 함수로 동작한다.
Array(1, 2, 3); // [1,2,3]
