// 모듈이란?
/**
 * 모듈은 파일 하나에 불과한다.
 * exprot로 내보내고 import로 불러내어 적용시킨다.
 *
 * 예를 들어서 sayHi.js란 파일에
 *  export function sayHi(user) {
 *  alert(`HEllo,${user}`);
 * }
 * 를 쓰고 main.js에
 * import {sayHi} from './sayHi.js';
 * alert(sayHi);
 * sayHi('John')
 * 이라고 작성이 가능하다.
 */

/**
 * 모듈의 핵심 기능
 * 1. 엄격모드로 실행된다.
 * 2. 모듈 레벨 스코프가 존재한다. 따라서 모듈 내부에서 정의한 변수나 함수는 다른 스크립트에서 접근할수 없다!
 * 3. 단 한 번만 평가된다. 모듈은 최조 호출시 단 한 번만 실행된다.
 *
 */
