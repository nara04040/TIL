// 배열안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트하는 메서드이다.
// 조건이 만족하는 값이 발견되면 순회는 중단된다. => 하나라도 true라면 true를 반화ㅏㄴ한다.
// array.some(callback [, thisArg])

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(array.some(even));
