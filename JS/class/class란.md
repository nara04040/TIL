# 클래스란?

자바스크립트에서 클래스는 함수의 한 종류이다.

```javascript
class User {
    constructor(name) {this.name = name}
    sayHi() {alert(this.name)}
}

console.log(typeof User)
```

위 코드에서 class User{}는 1. User라는 함수를 만들고 생성자 메서드인 constructor에서 가져온다.

2. sayHi같은 클래스 내에서 정의한 메서드를 User.prototype에 저장한다.

즉 new User를 호출해서 객체를 만들고 객체의 메서드를 호출하면 prototype 프로퍼티를 통해서 가져온다.

```javascript
class User {
    constructor(name) {this.name = name}
    sayHi() {console.log(this.name)}
}

// 클래스는 함수다.
console.log(typeof User ) //function
// 정확히는 생성자 메서드와 동일
console.log(User === User.prototype.constructor) // true
// 클래서 내부에서 정의한 메서드는 User.prototype에 저장된다.
console.log(User.prototype.sayHi); // console.log(this.name)
// 현재 프로토타입에는 메서드가 두개입니다.
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

## 클래스는 편의문법(syntactic sugar)이다?

```javascript
// 생성자 함수를 만든다.
function User(name) {
    this.name = name
}
// 모든 함수의 프로토타입은 'constructor' 프로퍼티를 기본으로 갖고 있다.
// constructor 프로퍼티를 명시적으로 만들 필요가 없다.

// 2. prototype에 메서드를 추가한다.
User.prototype.sayHi = function() {
    console.log(this.name)
}

// 사용법
let user = new User("John");
user.sayHi()
```

위처럼 순수함수로 클래스 역할을 하는 함수를 선언하는 방법, class키워드를 사용하는 방법의 결과는 거의 같다.
