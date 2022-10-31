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
var user = {
  name: "Jaenam",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http//blog.com",
    facebook: "http://facebook.com/abc",
  },
};
var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = "";

console.log(user.urls.blog === user2.urls.blog); // false
