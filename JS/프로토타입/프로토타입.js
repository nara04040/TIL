// var student = {
//   name: "Jin",
//   score: 90,
// };

// console.log(student.hasOwnProperty("name")); // true
// console.dir(student); // {name : 'Jin', score: 90}

// Prototype 객체는 생성자 함수에 의해 생성된 각각ㄱ의 객체에 공유 프로퍼티를 제공하기 위해 사용한다.

// [[Prototype]] vs prototype 프로퍼티
function Person(name) {
  this.name = name;
}

var foo = new Person("jin");
console.dir(Person); //prototype 프로퍼티가 있다.
console.dir(foo); // prototype 프로퍼티가 없다.

// - [[Prototype]]
/**
 * 함수를 포함한 모든 객체가 가지고 있는 인터널 슬롯이다.
 * 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리키면서 함수 객체의 경우 Function.prototype을 가르킨다.
 */

console.log(Person.__proto__ === Function.prototype);
