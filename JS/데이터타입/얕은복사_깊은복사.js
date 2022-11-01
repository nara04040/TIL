var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 중첩된 객체에 대한 얕은 복사
// var user = {
//   name: "Jaenam",
//   urls: {
//     portfolio: "http://github.com/abc",
//     blog: "http//blog.com",
//     facebook: "http://facebook.com/abc",
//   },
// };

// var user2 = copyObject(user);

// user2.name = "Jung";
// console.log(user.name === user2.name); //false

// user.urls.portfolio = "http://portfolio.com";
// console.log(user.urls.portfolio === user2.urls.portfolio); // true
// // console.log(user.urls.portfolio, user2.urls.portfolio);
// user2.urls.blog = "";
// console.log(user.urls.blog === user2.urls.blog); //true

// 중첩된 객체에 대한 깊은 복사
// var user = {
//   name: "Jaenam",
//   urls: {
//     portfolio: "http://github.com/abc",
//     blog: "http//blog.com",
//     facebook: "http://facebook.com/abc",
//   },
// };
// var user2 = copyObject(user);
// user2.urls = copyObject(user.urls);

// user.urls.portfolio = "http://portfolio.com";
// console.log(user.urls.portfolio === user2.urls.portfolio); // false

// user2.urls.blog = "";

// console.log(user.urls.blog === user2.urls.blog); // false

// 객체의 깊은 복사를 수행하는 범용함수
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

var obj = {
  a: 1,
  b: { c: null, d: [1, 2] },
};
var obj2 = copyObjectDeep(obj);
obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);
