# ** 경계 다루기**

### min - max
1. 최소값과 최대값을 다룬다.
2. 최소값과 최대값 포함 여부를 결정한다. (이상-초과, 이하-미만)
3. 네이밍에 최소값과 최대값 포함 여부를 표현한다.


```javascript
function genRandomNumber(min,max){
    return math.floor(Math.random() * (max - min + 1)) + min;
}

//상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER,MAX_NUMBER)
```

이렇게 코드만봐도 이해가 될수있게 변수명과 함수명을 지정해준다.

```javascript
const MAX_AGE = 20;

function isAdult(age){
// 최솟값, 최대값 , 이상,이하 초과 미만 등 헷갈릴수있는 부분을 두지말고 확실하게 이해할수있게 짜자 

    if(age >= 20) {

    }
}
```