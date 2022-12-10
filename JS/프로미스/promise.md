# Promise

promise 객체를 만들어보자

```javascript
let promise = new Promise(function(resolve, reject) {
    // executor (제작코드, '가수')
})
```

mew Promise 에 전달되는 함수는 executor(실행자, 실행함수)라고 부른다.

executor는 new Promise가 만들어질때 자동으로 실행된다.

executor의 인수 resolve와 reject는 자바스크립트에서의 자체 제공하는 콜백이다.

즉 개발자는 executor에서는 결과를 시간에 관계없이 상황에 때라 인수로 넘겨준 콜백 중 하나를 반드시 호출해야 한다.

- resolve(value) - 일이 성공적으로 끝난 경우  그 결과를 나타내는 value와 함께 호출
- reject(error) - 에러 발생시 에러 객체를 나타내는 error와 함께 호출

처리가 끝난다면 executer는 처리 성공여부에 따라서 resolve나 reject를 호출한다.