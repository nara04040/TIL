/**
 * call, apply, bind : 함수 호출 방식과 관계없이 this를 지정할 수 있다.
 */

// call

// const mike = {
//   name: "Mike",
// };

// const tom = {
//   name: "Tom",
// };

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// update.call(mike, 1999, "singer");
// console.log(mike);

// update.call(tom, 1939, "coder");
// console.log(tom);

// call은 매개변수를 직접받는다
// apply는 매개변수를 배열로 받는다

// update.apply(mike, [1999, "singer"]);
// console.log(mike);

// update.apply(tom, [1939, "coder"]);
// console.log(tom);

// const nums = [3, 10, 1, 6, 4];
// spread연산자 활용
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

// const minNum = Math.min.apply(null, nums);

// const maxNum = Math.max.call(null, ...nums);
// console.log(minNum);
// console.log(maxNum);

// .bind()  함수의 this의 값을 영구적으로 바꿀수 있다.
// const mike = {
//   name: "Mike",
// };

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1990, "police");
// console.log(mike);
