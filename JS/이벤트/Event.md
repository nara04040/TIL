# 이벤트(event)란

시스템에서 일어나는 사건 혹은 발생이다.

그것은 어떠한 방식으로 응답할 수 있도록 시스템이 말해 주는 것이다.

<br>

시스템은 이벤트가 발생될 때 신호를 생산(produce)시키고, 이벤트가 발생되었을 때 사건이 자동적으로 취해질수 있는 메커니즘을 제공한다.

<br>

웹의 이벤트같은 경우는 브라우저 윈도우 내에서 발생되고, 그것이 거주하는 특정한 요소에 부착되는 경향이 있다.

하나의 요소, 요소들의 집합, 현재 탭에 로드된 HTML문서, 혹은 브라우저 윈도우일지도 모른다.

각각의 이벤트들은 이벤트 핸들러를 가지고 있는데, 이벤트가 발생되면 실행되는 코드블럭이다.

코드 블럭이 이벤트에 응답하여 실행되기 위해 정의되었을때, 우리는 이벤트 핸들러를 등록(register)했다고 말한다.

<br>

하나의 버튼이 있고 이는 배경이 무작위로 바뀌는 버튼이다.

```html
<button>Change color</button>
```

```javascript
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol
}
```

Document.querySelector()함수를 사용하여 btn상수 내부에 버튼에 대한 참조를 저장했다. 

코드의 세번째 부분은 이벤트 핸들러입니다

btn상수는 <button>요소를 가리키고, 이 타입의 객체는 발생시킬수 있는 얼마간의 이벤트를 가지고 있으므로 , 이벤트 핸들러를 사용 가능하다.