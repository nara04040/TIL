// 첫글자는 대문자로 적어준다.
// 반드시 'new'를 붙여서 실행한다

// function User(name) {
//   // this = {}
//   this.name = name;
//   this.isAdmin = false;

//   // return this;
// }

// let user = new User("보라");

// console.log(user.name);
// console.log(user.isAdmin);

//  복잡한 객체를 만들때도 익명 생성자 함수로 감싸주는 방식을 사용할수있다.

// let user = new (function () {
//   this.name = "John";
//   this.isAdmin = false;
// })();
