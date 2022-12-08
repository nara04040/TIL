# private, protected 프로퍼티와 메서드

객체지향 포로그래밍에서 가장 중요한 원리 중 하나는 '내부 인터페이스와 외부 인터페이스를 구분 짓는 것'입니다.

내부 인터페이스와 외부 인터페이스를 구분하는 방법을 알아야한다.

<br>

### 내부 인터페이스와 외부 인터페이스

- 내부 인터페이스 : 동일한 클래스 내의 다른 메서드에선 접근할 수 있지만, 클래스 밖에선 접근할 수 없는 프로퍼티와 메서드

- 외부 인터페잍스 : 클래스 박에서도 접근 가능한 프로퍼티와 메서드

자바스크립트에는 아래와 같은 두 가지 타입의 필드가 있다.

- public : 어디서든지 접근할 수 있으며 외부 인터페이스를 구성한다. 프로퍼티와 메서드는 모두 public이다.
- private : 클래스 내부에서 접근하고, 내부 인터페이스를 구성할 때 쓰인다.

자바스크립트말고 다른 언어에서는 자손 클래스에서 접근을  허용하는 'protected' 필드를 지원한다.

protected 필드는 private와 비슷하다.

자손 클래스의 필드에 접근해야 하는 경우가 많아서 protected필드는 private 필드보다 더 광범위하게 사용된다.

```javascript
class CoffeeMachine {
    waterAmount = 0; // 물통에 차 있는 물의 양

    constructor(power) {
        this.power = power;
        console.log( `전력량이 ${power}인 커피머신을 만든다.`)
    }
}

// 커피 머신 생성
let  coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = 200;
```

현재 프로퍼티 waterAmount 와 power는 public 이다.

쉽게 waterAmount와 power를 읽고 원하는 값으로 변경하기 쉬운 상태이다.

protected 프로퍼티 명 앞에는 _이 붙는다.

```javascript
class CoffeeMachine{
    _watherAmount = 0
}
```
