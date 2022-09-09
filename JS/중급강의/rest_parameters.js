// rest parameter

// 인수전달
// function showName(name) {
//   console.log(name);
// }

// showName("Mike"); // 'Mike'
// showName("Mike", "Tom");

// showName();

// arguments

/**
 * 함수로 넘어 온 모든 인수에 접근
 * 함수 내에서 이용 가능한 지역 변수
 * length / index
 * Array 형태의 객체
 * 배열의 내장 메서드 없음 (forEach, map)
 */

// function showName(name) {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }

// showName("Mike", "Tom");

// 나머지 매개변수(Rest parameters)
// 전달 받은 모든 수를 더해야함

// function add(...numbers) {
//   let result = numbers.reduce((prev, cur) => prev + cur);

//   console.log(result);
// }

// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function User(name, age, ...skills) {
//   this.name = name;
//   this.age = age;
//   this.skill = skills;
// }
// const user1 = new User("Mike", 30, "html", "css", "javascript");
// const user2 = new User("Tom", 20, "js", "react", "vue");
// console.log(user1);
// console.log(user2);

// Spread syntax : 배열
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [0, ...arr1, ...arr2, 7, 8, 9];
// console.log(result);

// Spread syntax : 복제
// Object assgin 을 안써도 복제가능
// let arr = [1, 2, 3];
// let arr2 = [...arr];

// let user = { name: "Mike", age: 30 };
// let user2 = { ...user };

// user2.name = "Tom";
// console.log(user.name); // Mike
// console.log(user2.name); // Tom

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// 이렇게 해야하는걸
// arr2.reverse().forEach((num) => {
//   arr1.unshift(num);
// });

// spread syntax를 쓰면 이렇게 나올 수 있다.
// arr1 = [...arr2, ...arr1];

// console.log(arr1);

let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

// spread연산자 안쓸때
// user = Object.assign({}, user, info, {
//   skills: [],
// });

// fe.forEach((item) => {
//   user.skills.push(item);
// });
// lang.forEach((item) => {
//   user.skills.push(item);
// });

user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log(user);
