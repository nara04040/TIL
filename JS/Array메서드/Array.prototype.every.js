// 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.
// 결과 값은 Boolean으로 반환합니다.

const isBelowThreshold = (cur) => cur < 40;

const array1 = [1, 30, 36, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
