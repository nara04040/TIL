// var user = {
//   name: "Jaenam",
//   gender: "male",
// };

// var changeName = function (user, newName) {
//   var newUser = user;
//   newUser.name = newName;
//   return newUser;
// };

// var user2 = changeName(user, "Jung");

// if (user !== user2) {
//   console.log("유저정보가 변경되었습니다");
// }
// console.log(user.name, user2.name);
// console.log(user === user2);

//  changeName함수가 새로운 객체를 반환하도록 수정
// var user = {
//   name: "Jaenam",
//   gender: "male",
// };

// var changeName = function (user, newName) {
//   return {
//     name: newName,
//     gender: user.gender,
//   };
// };

// var user2 = changeName(user, "Jung");

// if (user !== user2) {
//   console.log("유저정보가 변경되었습니다");
// }
// console.log(user.name, user2.name);
// console.log(user === user2);

// 기존 정보를 복사해서 새로운 객체를 반환하는 함수
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// copyObject를 이용한 객체복사
var user = {
  name: "Jaenam",
  gender: "male",
};
var user2 = copyObject(user);
user2.name = "Jung";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다");
}
console.log(user.name, user2.name);
console.log(user === user2);
