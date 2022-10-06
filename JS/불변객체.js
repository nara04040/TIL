/**
 * 불변객체란?
 * 말 그대로 '변하지 않는 객체'라는 뜻이다
 * 이미 할당된 객체가 변하지 않는다는 말이다.
 * 이는 javascript에서는 const , Object.freeze()를 사용하면 되는데..
 */

// const
const test = {};
test.name = "Jin";
console.log(test); // {name : "Jin"}

/**
 * const 는 ES6 버전부터 적용되며
 * "변수를 상수로 선언한다"라고 말할수잇다.
 *  이때 상수는 일반적으로 선언된 변수값을 바꾸지 못하는걸로 알고있는데..
 * 과연 그럴까?
 *
 * const는 할당된 값이 상수가 되는것이 아니라 바인딩 된 값이 상수가 되는것이다.
 * 다시 말하자면 test변수 그 자체가 상수가 되기에 const로 선언된 test변수에는
 * **"객체 재할당이 불가능하지만 , 객체의 속성은 변경이 가능하다"**
 *
 * 재할당이 불가능한 이유는 변수와 값 사이의 바인딩 자체가 변경되어서 상수인 test변수는 재할당이 불가능하다.
 * 하지만 객체의 속성은 병경이 가능하다. 이 이유는 객체와 변수(test)사이의 바인딩이 변경되지 않기 때문에 객체의 속성은 변경이 가능하다
 * 따라서 불변객체라고 하기에는 보기 힘들다
 */

// Object.freeze()
/**
 * 자바스크립트에서 기본 메서드인 Object.freeze()는 공식문서에서 말하기를
 * "객체를 동결하기위한 메서드" 라고 말한다.
 * 그렇다면 이 Object.freeze()를 사용하여 불변객체를 만들 수 있을까?
 */

let test1 = {
  name: "Jin",
};
console.log(Object.freeze(test1)); // {name : "Jin"}

// 사용법 : test1변수에 key, value값을 가진 객체를 바인딩시키고 Object.freeze(test1)를 해주면된다.
// 이때 test1객체는 객체의 속성을 변경하는 시도는 불가능하다.

test1.name = "nara";
console.log(test1); // {name : "Jin"}
// 보다시피 객체의 속성을 변경하지 못한다.
// 그러나 Object.freeze()는 객체의 재할당은 가능하다.

test1 = {
  age: 26,
};
console.log(test1); //{name : "Jin"} {age : 26}
/**
 * 즉 재할당이 가능하므로 Object.freeze()도 불변객체라고 하기에는 힘들다.
 * 그렇다면 javascript에서 불변객체를 만들려면 어떻게 해야하는가?
 * 정답은 이 const, Object.freeze() 둘을 잘 섞어쓰면된다.
 * const (재할당 불가) + Object.freeze() (객체속성 변경 불가)) 이 특성을 이용하여
 */

const immutable = {
  name: "Jin",
};

Object.freeze(immutable);
//  이런식으로 cosnt로 선언후 Object.freeze()로 동결 객체를 만들어버리면 객체의 재할당, 객체 속성변경 둘다 변경이 안되는
// 불.변.객.체가 된다.
