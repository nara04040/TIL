// 오버라이딩
class Car {
  constructor(color) {
    this.color = color;
    this.whieels = 4;
  }

  drive() {
    console.log("부릉");
  }

  stop() {
    console.log("끼익");
  }
}

class BMW extends Car {
  constructor() {
    this.navigation = 1;
  }
  park() {
    console.log("주차");
  }
}

// const z4 = new BMW("blue");를 console에 찍어본다면 RefferenceError가 발생한다.
// 이유는 부모생성자를 호출하지 않았기 때문이다.
// class의 constructor는 빈객체{}를 만들어주고 this를 빈객체를 지정한다음 값을 넣어주는 방식이다.
// 하지만 자식class 즉 BMW에서 extends Car를 한 자식class는 이 작업을 건너뛴다.
// 그렇기에 항상 super를 이용하여 부모의 class를 constructor를 실행해줘야한다.

/**
 class Car {
  constructor(color) {
    this.color = color;
    this.whieels = 4;
  }

  drive() {
    console.log("부릉");
  }

  stop() {
    console.log("끼익");
  }
}

class BMW extends Car {
  constructor() {
    super()
    this.navigation = 1;
  }
  park() {
    console.log("주차");
  }
}

console에 const z4 = new BMW("blue"); 찍어본다면 잘나온다.
하지만 color는 undefined가 나온다. 
그이유는 자식 class 의 constructor의 parameter에 color를 넣어주지 않았기때문이다.
 */

/**
  class Car {
  constructor(color) {
    this.color = color;
    this.whieels = 4;
  }

  drive() {
    console.log("부릉");
  }

  stop() {
    console.log("끼익");
  }
}

class BMW extends Car {
  constructor(color) {
    super(color)
    this.navigation = 1;
  }
  park() {
    console.log("주차");
  }
}

 */
