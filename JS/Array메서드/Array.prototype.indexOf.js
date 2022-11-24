// indexOf 메서드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.

const arr = [1, 2, 2, 4];

console.log(arr.indexOf(2)); // 1

arr.indexOf(4); // -1

// 배열에 특정요소가 존재하는지 확인할 때 유용하다.
const foods = ["apple", "banana", "orange"];

if (foods.indexOf("orange") === -1) {
  foods.push("orange");
}
console.log(foods); // ["apple", "banana", "orange"];

// indexOf메서드 대신 Array.prototype.includes 를 사용하면 가독성에 더 좋다.

const foods1 = ["apple", "banana", "orange"];

if (foods1.includes("orange") === -1) {
  foods1.push("orange");
}
console.log(foods1); // ["apple", "banana", "orange"];
