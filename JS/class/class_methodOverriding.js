// class의 상속
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
  park() {
    console.log("주차");
  }
}

const z4 = new BMW("blue");

// z4.drive를 실행한다면 prototype 체인을 타고 BMW에서 drive를 찾는다. 이후 없으므로 다시 prototype 체인을 타고 Car안의 drive()를 실행한다.

// 메서드 오버라이딩은
/**

class BMW extends Car {
  park() {
    console.log("주차");
  }
  stop() {
    console.log("OFF")
  }
}

이처럼 stop이 중복되어있다면 덮어써져서 "OFF"를 반환한다.
만약 부모의 stop을 사용하고싶다면


class BMW extends Car {
  park() {
    console.log("주차");
  }
  stop() {
    super.stop();
    console.log("OFF")
  }
}

이처럼 super를 사용한다.
 */
