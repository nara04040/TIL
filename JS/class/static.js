// static : 클래스의 정적 메서드를 정의해준다.
// 정적 메서드는 클래스의 종속적인 메서드르 의미한다.
// 클래스와 해당 메서드는 연결되어있지만, 해당 클래스의 특정 인스턴스와는 연결되있지 않다.
// 그래서 정적메서드는 특정 객체에 저장된 데이터에 접근할수 없다.

// 정적 메서드는 인스턴스 없이 클래스에서 바로 호출이 가능하고 이런 특성때문에 유틸 함수를 만드는데 유용하다

// class User {
//   static staticMethod() {
//     console.log(this === User);
//   }
// }
// User.staticMethod(); // true

// class User {
//   static counter = 0;
// }

// console.log(User.counter); //0
