# super

부모 오브젝트의 함수를 호출할 때 사용된다.

super.prop, super[expr] 표현식은 클래스와 객체 리터럴의 어떠한 메서드 정의 방법에도 유효하다.


``` javascript
super([arguments]); // 부모 생성자 호출
super.functionOnParent([arguments]);
```

생성자에서는 super 키워드 하나만 사용되거나 this 키워드가 사용되기 전에 호출되어야한다.

super 키워드는 부모 객체의 함수를 호출하는데 사용될 수 있습니다.